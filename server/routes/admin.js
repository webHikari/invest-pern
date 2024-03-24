const router = require('express').Router();
const pool = require('../database/db');
const authorization = require('../middleware/authorization');

// Endpoint for retrieving unverified users (accessible to admins only)
router.post('/verification', authorization, async (req, res) => {
    try {
        // 1. Parse token
        const token = req.header('token');
        const parsedToken = JSON.parse(
            Buffer.from(token.split('.')[1], 'base64').toString()
        );

        // Retrieve user information with admin role from the database
        const user = await pool.query(
            'SELECT * FROM users WHERE user_id = $1 AND user_role = $2',
            [parsedToken.user, 'Admin']
        );

        if (user.rows.length !== 0) {
            // Retrieve unverified users information by joining verification_buffer and users table
            const selectUnverifiedUsers = await pool.query(
                'SELECT * FROM verification_buffer JOIN users ON verification_buffer.user_id = users.user_id'
            );

            res.status(200).json(selectUnverifiedUsers.rows);
        } else {
            res.status(401).json('You are not an admin');
        }
    } catch (err) {
        console.log(err.message);
        res.send(403).json('Server Error');
    }
});

// Endpoint for verifying or declining a user (accessible to admins only)
router.post('/verifyUser', authorization, async (req, res) => {
    try {
        const token = req.header('token');
        const { action, user_id } = req.body;
        const parsedToken = JSON.parse(
            Buffer.from(token.split('.')[1], 'base64').toString()
        );

        // Retrieve admin information from the database
        const admin = await pool.query(
            'SELECT * FROM users WHERE user_id = $1 AND user_role = $2',
            [parsedToken.user, 'Admin']
        );

        // Retrieve user information from the database
        const user = await pool.query(
            'SELECT * FROM users WHERE user_id = $1',
            [user_id]
        );

        if (admin.rows.length !== 0) {
            if (user.rows.length !== 0) {
                if (action === 'Decline') {
                    // Delete user from verification_buffer
                    const deleteUser = await pool.query(
                        'DELETE FROM verification_buffer WHERE user_id = $1',
                        [user_id]
                    );
                    deleteUser;
                    res.status(200).json('Verification declined');
                } else if (action === 'Accept') {
                    // Update user's verified status to true
                    const verifyUser = await pool.query(
                        'UPDATE users SET verified = true WHERE user_id = $1',
                        [user_id]
                    );
                    verifyUser;

                    // Retrieve user's data from verification_buffer
                    const selectUser = await pool.query(
                        'SELECT * FROM verification_buffer WHERE user_id = $1',
                        [user_id]
                    );
                    const data = selectUser.rows[0];

                    // Extract the required data
                    const parsedData = [
                        data.user_id,
                        data.firstname,
                        data.surname,
                        data.lastname,
                        data.birthday,
                        data.birthmonth,
                        data.birthyear,
                        data.document_id,
                        data.document1,
                        data.document2,
                    ];

                    // Add the user to verified_users table
                    const addToVerifiedList = await pool.query(
                        'INSERT INTO verified_users (user_id, firstname, surname, lastname, birthday, birthmonth, birthyear, document_id, document1, document2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
                        [...parsedData]
                    );
                    addToVerifiedList;

                    // Delete user from verification_buffer
                    const deleteUser = await pool.query(
                        'DELETE FROM verification_buffer WHERE user_id = $1',
                        [user_id]
                    );
                    deleteUser;

                    res.status(200).json(
                        'This user has been successfully verified'
                    );
                } else {
                    res.status(403).json('Please select an action');
                }
            } else {
                res.status(404).json('This user does not exist');
            }
        } else {
            res.status(401).json('You are not an admin');
        }
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;

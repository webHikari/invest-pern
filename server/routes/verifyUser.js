const router = require('express').Router();
const pool = require('../database/db');
router.post('/', async (req, res) => {
    try {
        // 1. Check the variables
        const { documentDay, documentMonth, documentYear, lastname, firstname, surname } = req.body;
        if (
            ![
                documentDay,
                documentMonth,
                documentYear,
                lastname,
                firstname,
                surname,
            ].every(Boolean)
        ) {
            return res.status(401).json('Missing credentials');
        }
        // 2. Check if this documents already exist
        const user = await pool.query(
            'SELECT * FROM verification WHERE  = $1',
            [email]
        );

        res.json(req.body);
    } catch (err) {
        console.log(err.message);
        res.status(403).json('Server Error');
    }
});

module.exports = router;

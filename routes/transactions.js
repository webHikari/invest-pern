const router = require('express').Router();
const pool = require('../database/db');
const authorization = require('../middleware/authorization');
router.get('/', authorization, async (req, res) => {
    try {
        //  res.user has the payload
        const user = await pool.query(
            'SELECT * FROM users WHERE user_id = $1',
            [req.user]
        );

        const history = await pool.query(
            'SELECT * FROM history WHERE user_id = $1',
            [req.user]
        );

        res.json([user.rows[0], history.rows[0]]);
    } catch (err) {
        console.log(err.message);
        res.send(403).json('Server Error');
    }
});

module.exports = router;

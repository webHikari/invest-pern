const router = require('express').Router();
const pool = require('../database/db');
router.post('/', async (req, res) => {
    try {
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
        res.json(req.body);
    } catch (err) {
        console.log(err.message);
        res.status(403).json('Server Error');
    }
});

module.exports = router;

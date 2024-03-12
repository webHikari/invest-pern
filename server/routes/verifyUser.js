const router = require('express').Router();
const pool = require('../database/db');
const validinfo = require('../middleware/validinfo');
router.post('/', validinfo, async (req, res) => {
    try {
        res.json(req.body);
    } catch (err) {
        console.log(err.message);
        res.status(403).json('Server Error');
    }
});

module.exports = router;

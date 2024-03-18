const router = require('express').Router();
const pool = require('../database/db');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const multer = require('multer')
const fs = require('fs');

const uploadFolder = path.join(__dirname, '../documents');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage }).any();

router.post('/', async (req, res) => {
    try {
        // 1. Check the variables
        const {
            firstname,
            surname,
            lastname,
            documentMonth,
            documentDay,
            documentYear,
            documentSerial,
            documentCount,
        } = req.body;
        if (
            ![
                firstname,
                surname,
                lastname,
                documentMonth,
                documentDay,
                documentYear,
                documentSerial,
                documentCount,
            ].every(Boolean)
        ) {
            return res.status(401).json('Missing credentials');
        }
        // 2. Check if this documents already exist
        const user = await pool.query(
            'SELECT * FROM verified_users WHERE firstname = $1',
            [firstname]
        );

        res.json(req.body);
    } catch (err) {
        console.log(err.message);
        res.status(403).json('Server Error');
    }
});

router.post('/documents', async (req, res) => {
    try {
        upload(req, res, (err) => {
            if (err) {
              console.error(err.message);
              return res.status(403).json({ error: 'Ошибка загрузки файла' });
            }
            res.status(200).json({message: 'Krasava'});
          });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' }); // modified status and response format
    }
});
module.exports = router;

module.exports = router;

const router = require('express').Router();
const pool = require('../database/db');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const multer = require('multer');

const uploadFolder = path.join(__dirname, '../documents');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
        const startIndex = file.originalname.lastIndexOf('.');
        const fileEnding = file.originalname.substring(startIndex);
        const uniqueFilename = uuidv4() + fileEnding;
        req.filename = uniqueFilename; // XDDDDDDDDDD
        cb(null, uniqueFilename);
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
        ![firstname, surname, lastname, documentMonth, documentDay, documentYear, documentSerial, documentCount].every(Boolean)
      ) {
        return res.status(401).json('Missing credentials');
      }
  
      // 2. Check if this document already exists
      const existingUser = await pool.query(
        'SELECT * FROM verified_users WHERE firstname = $1 AND lastname = $2 AND surname = $3 AND birthmonth = $4 AND birthday = $5 AND birthyear = $6',
        [firstname, lastname, surname, documentMonth, documentDay, documentYear]
      );
  
      const token = req.header('token');
      const parsedToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  
      if (existingUser.rows.length !== 0) {
        return res.status(400).json('This person is already verified');
      } else {
        const user = await pool.query('SELECT * FROM verification_buffer WHERE user_id = $1', [parsedToken.user]);
  
        const document_id = documentSerial + ' ' + documentCount;
  
        if (user.rows.length !== 0) {
          console.log('update');
          const updateRow = await pool.query(
            'UPDATE verification_buffer SET firstname = $1, lastname = $2, surname = $3, birthmonth = $4, birthday = $5, birthyear = $6, document_id = $7 WHERE user_id = $8',
            [firstname, lastname, surname, documentMonth, documentDay, documentYear, document_id, user.rows[0].user_id]
          );
  
          console.log(updateRow);
  
          res.status(200).json({ message: 'Update was successful' });
        } else {
          console.log('insert');
          await pool.query(
            'INSERT INTO verification_buffer (user_id, firstname, lastname, surname, birthmonth, birthday, birthyear, document_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [parsedToken.user, firstname, lastname, surname, documentMonth, documentDay, documentYear, document_id]
          );
  
          res.status(200).json({ message: 'Insertion successful' });
        }
      }

    } catch (err) {
      console.log(err.message);
      res.status(403).json('Server Error');
    }
  });
  

router.post('/documents1', async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error(err.message);
                return res.status(403).json({ error: 'Ошибка загрузки файла' });
            }
            const filename = req.filename;

            const token = req.header('token');
            const parsedToken = JSON.parse(
                Buffer.from(token.split('.')[1], 'base64').toString()
            );

            const user = await pool.query(
                'SELECT * FROM verification_buffer WHERE user_id = $1',
                [parsedToken.user]
            );

            if (user.rows.length !== 0) {
                const updateRow = await pool.query(
                    'UPDATE verification_buffer SET document1 = $1 WHERE user_id = $2',
                    [filename, parsedToken.user]
                );
                console.log(updateRow);
                res.status(200).json({ message: 'Update was successful' });
            } else {
                const insertRow = await pool.query(
                    'INSERT INTO verification_buffer (user_id, document1) VALUES ($1, $2) RETURNING *',
                    [parsedToken.user, filename]
                );
                console.log(insertRow);
                res.status(200).json({ message: 'Insert was successful' });
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

router.post('/documents2', async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error(err.message);
                return res.status(403).json({ error: 'Ошибка загрузки файла' });
            }
            const filename = req.filename;

            const token = req.header('token');
            const parsedToken = JSON.parse(
                Buffer.from(token.split('.')[1], 'base64').toString()
            );

            const user = await pool.query(
                'SELECT * FROM verification_buffer WHERE user_id = $1',
                [parsedToken.user]
            );

            if (user.rows.length !== 0) {
                const updateRow = await pool.query(
                    'UPDATE verification_buffer SET document2 = $1 WHERE user_id = $2',
                    [filename, parsedToken.user]
                );
                console.log(updateRow);
                res.status(200).json({ message: 'Update was successful' });
            } else {
                const insertRow = await pool.query(
                    'INSERT INTO verification_buffer (user_id, document2) VALUES ($1, $2) RETURNING *',
                    [parsedToken.user, filename]
                );
                console.log(insertRow);
                res.status(200).json({ message: 'Insert was successful' });
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;

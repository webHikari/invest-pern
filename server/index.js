const express = require('express');
const cors = require('cors');
const app = express();

require("dotenv").config()
const PORT = process.env.PORT || 3000;

// middleware >
app.use(express.json());
app.use(cors());

// routes >
app.use('/auth', require('./routes/jwtAuth'));

app.use('/dashboard', require('./routes/dashboard'))

app.listen(PORT, () => {
    console.log(`Server dancin' on ${PORT}`);
});

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    post: 5432,
    database: 'jwttutorial',
});

module.exports = pool;

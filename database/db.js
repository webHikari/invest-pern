const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'F615a950n0',
    host: 'localhost',
    post: 5432,
    database: 'postgres',
});

module.exports = pool;

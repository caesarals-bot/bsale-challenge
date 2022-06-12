const mysql = require('mysql')

const pool = mysql.createPool({
    host: process.env.Host,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


module.exports = pool

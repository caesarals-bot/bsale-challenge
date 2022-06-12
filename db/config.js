const mysql = require('mysql')

const pool = mysql.createPool({
    host: process.env.Host,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

pool.getConnection((err) => {
    if(err) {
        console.log(err)}
    else{
        console.log('Database connect')
    }
    })
module.exports = pool

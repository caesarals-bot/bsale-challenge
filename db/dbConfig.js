const { Sequelize } = require('sequelize')

const db = new Sequelize(
    process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
        host: process.env.Host,
        dialect: 'mysql'
} )

module.exports = db
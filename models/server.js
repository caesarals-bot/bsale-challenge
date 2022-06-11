const express = require('express')
const cors = require('cors')

const {pool} = require('../db/config')
class Server {
      
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.productsPath = '/api/products'
        //Conectar a database
        this.conectarDB
        //Middleware: añaden otras funcionalidades al web server
        this.middlewares()
        //Rutas
        this.routes()
    }
    async conectarDB(){
        try {
            await pool
            console.log('Database connect')
        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares(){
        //Cors
        this.app.use( cors())
        // Lectura y parseo del body
        this.app.use( express.json() )
        //directorio publico
        this.app.use( express.static('public'))
    }

    routes(){
       this.app.use(this.productsPath, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        })
    }
}

module.exports = Server;
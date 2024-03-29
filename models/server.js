const express = require('express')
const cors = require('cors')

const pool = require('../db/config')
class Server {
      
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.productsPath = process.env.PRODUCTSPATH
        //Conectar a database
        this.conectarDB()
        //Middleware: añaden otras funcionalidades al web server
        this.middlewares()
        //Rutas
        this.routes()
    }

    async conectarDB(){
        try {
            await pool.getConnection
            console.log('DB online')
        } catch (error) {
            console.log(error)
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
       this.app.use(this.productsPath, require('../routes/product'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        })
    }
}

module.exports = Server;
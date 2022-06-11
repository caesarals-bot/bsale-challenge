const {Request, Response} = require("express")
const pool = require("../db/config")


const productsGet = async (req = Request , res = Response ) => {
    const {id, category} = req.params

    if(id){
        await pool.query(
        'SELECT * FROM product WHERE id=?', 
        [id], (err, rows, fields) => {
            if(!err){
                res.json(rows[0])
            }else{
                console.log(err)
            }
        })
    }
    if(category){
        await pool.query(
        'SELECT * FROM product WHERE category=?', 
        [category], (err, rows, fields) => {
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        })
    }
    if(!id && !category){
        await  pool.query('select * from product', function(err, rows){
        if(!err){
            if( rows ) {
                res.json(rows)
            } else {
                res.status(404).json({
                    msg: `No existe el producto`
                })
            }
        }
     })
    }
}
const productsPost = (req, res) => {
    const {nombre, edad} = req.body
    res.status(201).json({
        msg: 'Post API. controller',
        nombre, edad
    })
}
const productsPut = (req, res = response) => {
    const id = req.params.id
    res.json({
        msg: 'Put API Desde controlador',
        id
    })
}
const productsPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API Desde controlador'
    })
}
const productsDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API Desde controlador'
    })
}

module.exports = {
    productsGet,
    productsPost,
    productsPut,
    productsPatch: productsPatch,
    productsDelete,
}
const {Router} = require('express')
const { 
    productsGet,
    productGet, 
    productsPut, 
    productsPost, 
    productsPatch,
    productsDelete 
} = require('../controllers/products')

const router = Router()


router.get('/', productsGet)
router.get('/:id', productGet)
router.put('/:id', productsPut)
router.post('/', productsPost)
router.patch('/', productsPatch)
router.delete('/', productsDelete)

module.exports = router
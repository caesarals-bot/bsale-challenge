const {Router} = require('express')
const { 
    productsGet, 
    productsPut, 
    productsPost, 
    productsPatch,
    productsDelete 
} = require('../controllers/products')

const router = Router()


router.get('/:id?', productsGet)
router.get('/category/:category', productsGet)
router.put('/:id', productsPut)
router.post('/', productsPost)
router.patch('/', productsPatch)
router.delete('/', productsDelete)

module.exports = router
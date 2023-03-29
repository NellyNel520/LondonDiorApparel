const router = require("express").Router();
const controllers = require("../controllers/productController");


router.post('/category', controllers.createProductCategory)
router.post('/addProduct', controllers.createProduct)

// Get All (Read)
router.get('/category', controllers.getAllCategories)
router.get('/products', controllers.getAllProducts)


// Get by ID
router.get('/category/:id', controllers.getCategoryById)
router.get('/products/:id', controllers.getProductById)

module.exports = router;
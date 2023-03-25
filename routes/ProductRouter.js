const Router = require("express").Router();
const controllers = require("../controllers/productController");

Router.post('/category', controllers.createProductCategory)
Router.post('/addProduct', controllers.createProduct)

// Get All (Read)
Router.get('/category', controllers.getAllCategories)
Router.get('/products', controllers.getAllProducts)


// Get by ID
Router.get('/category/:id', controllers.getCategoryById)
Router.get('/products/:id', controllers.getProductById)

module.exports = Router;
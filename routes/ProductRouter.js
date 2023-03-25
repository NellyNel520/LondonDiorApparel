const Router = require("express").Router();
const controllers = require("../controllers/productController");

Router.post('/category', controllers.createProductCategory)
Router.post('/addProduct', controllers.createProduct)

module.exports = Router;
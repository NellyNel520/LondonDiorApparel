const Router = require("express").Router();
const controllers = require("../controllers/productController");

Router.post('/category', controllers.createProductCategory)

module.exports = Router;
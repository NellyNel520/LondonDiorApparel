const Router = require("express").Router();
const ProductRouter = require("./ProductRouter")



// Test
Router.get('/', (req, res) => res.send('This is root!'))

Router.use("/product", ProductRouter)

module.exports = Router;
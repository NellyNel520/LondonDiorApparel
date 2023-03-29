const Router = require("express").Router();
const ProductRouter = require("./ProductRouter")
const AuthRouter = require("./AuthRouter")
const OrderRouter = require("./OrderRouter")



// Test
Router.get('/', (req, res) => res.send('This is root!'))

Router.use("/product", ProductRouter)
Router.use("/auth", AuthRouter)
Router.use("/order", OrderRouter)

module.exports = Router;
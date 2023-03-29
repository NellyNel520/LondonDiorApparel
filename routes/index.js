const Router = require("express").Router();
const ProductRouter = require("./ProductRouter")
const AuthRouter = require("./AuthRouter")



// Test
Router.get('/', (req, res) => res.send('This is root!'))

Router.use("/product", ProductRouter)
Router.use("/auth", AuthRouter)

module.exports = Router;
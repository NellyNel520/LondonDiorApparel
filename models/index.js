const mongoose = require('mongoose')
const productCategorySchema = require('./productCategory')
const productSchema = require('./product')
const userSchema = require('./user')
const shoppingCartSchema = require('./shoppingCartItem')

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema)
const Product = mongoose.model('Product', productSchema)
const ShoppingCartItem = mongoose.model('ShoppingCartItem', shoppingCartSchema)
const User = mongoose.model('User', userSchema)


module.exports = {
  ProductCategory,
  Product,
  ShoppingCartItem,
  User

}
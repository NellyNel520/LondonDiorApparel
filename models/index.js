const mongoose = require('mongoose')
const productCategorySchema = require('./productCategory')
const productSchema = require('./product')
const userSchema = require('./user')
const orderSchema = require('./order')

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema)
const Product = mongoose.model('Product', productSchema)
const Order = mongoose.model('Order', orderSchema)
const User = mongoose.model('User', userSchema)


module.exports = {
  ProductCategory,
  Product,
  Order,
  User

}
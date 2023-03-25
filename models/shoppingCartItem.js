const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShoppingCartItem = new Schema(
    {
      customerId: {type: Schema.Types.ObjectId, ref: 'User'},
      productId: {type: Schema.Types.ObjectId, ref: 'Product'},
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    },
    { timestamps: true }
  )


module.exports = ShoppingCartItem
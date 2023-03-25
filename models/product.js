const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
    {
      name: { type: String, required: true },
      sku: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: String, required: true },
      sizes: [{ type: String, required: true }],
      categoryId: {type: Schema.Types.ObjectId, ref: 'ProductCategory'}
    },
    { timestamps: true }
  )


module.exports = Product
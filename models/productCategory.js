
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductCategory = new Schema(
    {
      name: { type: String, required: true },
      code: { type: String, required: true },
      image: { type: String, required: false },
      description: { type: String, required: true },
      products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
    },
    { timestamps: true }
  )


module.exports = ProductCategory
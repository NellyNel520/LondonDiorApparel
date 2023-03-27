const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const Product = new Schema(
    {
      name: { type: String, required: true, unique: true },
      slug: { type: String, required: true, unique: true },
      image: { type: String, required: true },
      images: [String],
      brand: { type: String, required: true },
      categoryId: {type: Schema.Types.ObjectId, ref: 'ProductCategory'},
      description: { type: String, required: true },
      price: { type: Number, required: true },
      countInStock: { type: Number, required: true },
      rating: { type: Number, required: true },
      numReviews: { type: Number, required: true },
      reviews: [reviewSchema],
      
    },
    { timestamps: true }
  )


module.exports = Product
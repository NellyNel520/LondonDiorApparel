const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      username: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      admin: {type: Boolean, required: false},
      shippingAddress: { type: String, required: false },
      billingAddress: { type: String, required: false },
    },
    { timestamps: true }
  )


module.exports = User
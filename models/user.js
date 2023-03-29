const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      passwordDigest: { type: String, required: true },
      admin: {type: Boolean, default: false, required: true},
    },
    { timestamps: true }
  )


module.exports = User
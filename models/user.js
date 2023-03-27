const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      username: { type: String, required: true },
      password: { type: String, required: true },
      admin: {type: Boolean, default: false, required: true},
    },
    { timestamps: true }
  )


module.exports = User
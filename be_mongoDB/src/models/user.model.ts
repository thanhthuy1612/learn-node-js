import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true
    },
    name: String,
    city: String,
    address: String,
    phone: String,
    image: String,
    description: String
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User

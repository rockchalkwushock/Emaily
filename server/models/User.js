import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  credits: {
    type: Number,
    default: 0
  },
  googleId: String
})

export default mongoose.model('users', userSchema)

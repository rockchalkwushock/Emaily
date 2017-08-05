import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  googleId: String
})

export default mongoose.model('users', userSchema)

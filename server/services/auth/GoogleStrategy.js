import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

import env from '../../config/environment'
import { User } from '../../models'

export default new GoogleStrategy(
  {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await User.findOne({ googleId: profile.id })
      if (existingUser) return done(null, existingUser)
      const newUser = await User.create({ googleId: profile.id })
      return done(null, newUser)
    } catch (e) {
      throw e
    }
  }
)

import passport from 'passport'

import { User } from '../../models'
import GoogleLogin from './GoogleStrategy'

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user))
})

passport.use(GoogleLogin)

export const authGoogleInit = passport.authenticate('google', {
  scope: ['profile', 'email']
})
export const authGoogleEnd = passport.authenticate('google', {
  failureRedirect: '/'
})
// http://localhost:4000/auth/google

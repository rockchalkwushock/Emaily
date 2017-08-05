const passport = require('passport')

const GoogleLogin = require('./GoogleStrategy')

passport.use(GoogleLogin)

module.exports = passport.authenticate('google', {
  scope: ['profile', 'email']
})

// http://localhost:5000/auth/google

const authGoogle = require('../services')

module.exports = app => {
  app.get('/auth/google', authGoogle)
  app.get('/auth/google/callback', authGoogle)
}

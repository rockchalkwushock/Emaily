import { authGoogleInit, authGoogleEnd, createCharge } from '../services'
import { requireLogin } from '../utils'

export default app => {
  app.get('/auth/google', authGoogleInit)
  app.get('/auth/google/callback', authGoogleEnd, (req, res) => {
    res.redirect('/surveys')
  })
  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })
  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
  app.post('/api/stripe', requireLogin, async (req, res) => {
    try {
      const user = await createCharge(req)
      res.send(user)
    } catch (e) {
      throw e
    }
  })
}

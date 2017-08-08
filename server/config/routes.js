import {
  authGoogleInit,
  authGoogleEnd,
  createCharge,
  createSurvey
} from '../services'
import { requireCredits, requireLogin } from '../utils'

export default app => {
  // Authentication Routes
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
  // Billing Routes
  app.post('/api/stripe', requireLogin, async (req, res) => {
    try {
      const user = await createCharge(req)
      res.send(user)
    } catch (e) {
      throw e
    }
  })
  // Survey Routes
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!')
  })
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    try {
      const response = await createSurvey(req)
      res.send(response)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}

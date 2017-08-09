import {
  authGoogleInit,
  authGoogleEnd,
  createCharge,
  createSurvey,
  getSurveys,
  webhook
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
      // FIXME handle with status & error message
      throw e
    }
  })
  // Survey Routes
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!')
  })
  app.get('/api/surveys', requireLogin, async (req, res) => {
    try {
      const surveys = await getSurveys(req)
      res.send(surveys)
    } catch (e) {
      // FIXME handle with status & error message
      throw e
    }
  })
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    try {
      const response = await createSurvey(req)
      res.send(response)
    } catch (err) {
      res.status(422).send(err)
    }
  })
  app.post('/api/surveys/webhooks', (req, res) => webhook(req, res))
}

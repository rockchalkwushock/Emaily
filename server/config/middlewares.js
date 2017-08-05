import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import morgan from 'morgan'
import passport from 'passport'

import env from './environment'

export default app => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [env.COOKIE_SECRET]
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(morgan('dev'))
}

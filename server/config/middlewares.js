import bodyParser from 'body-parser'
import compression from 'compression'
import cookieSession from 'cookie-session'
import cors from 'cors'
import helmet from 'helmet'
import methodOverride from 'method-override'
import morgan from 'morgan'
import passport from 'passport'

import env from './environment'

const isTest = process.env.NODE_ENV === 'test'
const isDev = process.env.NODE_ENV === 'development'

export default app => {
  app.use(compression())
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
  app.use(helmet())
  app.use(cors())
  app.use(methodOverride())
  if (isDev && !isTest) {
    app.use(morgan('dev'))
  }
}

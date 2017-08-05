import Express from 'express'
import { database, env, middlewares, routes } from './config'

const app = new Express()

database(env.MONGO_URI)
middlewares(app)
routes(app)

app.listen(env.PORT, () => {
  console.log(`App listening on port 3000 in ${process.env.NODE_ENV}!`)
})

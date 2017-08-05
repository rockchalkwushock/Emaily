const Express = require('express')
const routes = require('./config')

const app = new Express()
const PORT = process.env.PORT || 5000

routes(app)

app.listen(PORT, () => {
  console.log('App listening on port 5000!')
})

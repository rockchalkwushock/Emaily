const Express = require('express')

const app = new Express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})

app.listen(PORT, () => {
  console.log('App listening on port 5000!')
})

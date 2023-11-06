const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/api', function (req, res) {
    res.send('Hello World from api')
  })

  app.get('/help', function (req, res) {
    res.send('Hello World from help')
  })
  app.get('*', function (req, res) {
    res.send('error page / page not found')
  })
app.listen(3000)
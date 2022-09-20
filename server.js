// import modules

import express from 'express'

// Create Express app

const app = express()

// Configure the app (app.set)



// Mount Middleware (app.use)

app.get('/', function(req, res) {
  res.send('<h1>hello, friend</h1>')
})

app.get('/sloths', function(req, res) {
  res.send('<h1>Sloths are slow.</h1>')
})

app.get('/yaks', function(req, res) {
  res.send('<h1>What is a Yak?</h1>')
})

app.get('/bull', function(req, res) {
  res.redirect('/yaks')
})
// Mount routes



// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
const express = require('express')
require('./db/mongoose')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use('/api/users', require('./routes/user'))
app.use('/api/books', require('./routes/book'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

module.exports = app

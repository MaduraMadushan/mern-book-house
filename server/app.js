const express = require('express')
require('./db/mongoose')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use('/api/users', require('./routes/user'))
app.use('/api/books', require('./routes/book'))

module.exports = app

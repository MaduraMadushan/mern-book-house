const express = require('express')
require('./db/mongoose')
require('dotenv').config()

const app = express()

app.use(express.json())

module.exports = app

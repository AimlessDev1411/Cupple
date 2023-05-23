const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())

// Middlewares
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(require('./routes/routes'))

module.exports = app
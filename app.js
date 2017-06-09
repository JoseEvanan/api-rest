'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')
//const Product = require('./models/product')
//middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/api', api)
//app.get('/hola/:name', (req, res) => {
//	res.send({ message: `Hola ${req.params.name}!`})
//})
//200 repuesta correcta
//404 no exites
//403 usuario no tien permiso
//500 error en el servidor
module.exports = app

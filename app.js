'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')
//const Product = require('./models/product')
//middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
  defaultLayaut: 'default',
  extname: '.hds',
}))
app.set('view engine', '.hbs')
app.use('/api', api)
app.use('/login', (req, res) => {
  res.render('login')
})
//app.get('/hola/:name', (req, res) => {
//	res.send({ message: `Hola ${req.params.name}!`})
//})
//200 repuesta correcta
//404 no exites
//403 usuario no tien permiso
//500 error en el servidor
module.exports = app

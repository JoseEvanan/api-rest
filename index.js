'use strict'

const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = process.env.PORT || 3000

//middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//GET
app.get('/api/product', (req, res) => {


})

app.get('/api/product/:productId', (req, res) => {

	
})

app.post('/api/product', (req, res) => {

	
})

app.get('/api/product', (req, res) => {

	
})
app.listen(port, () => {
	console.log(`API REST corriendo ${port}`)
})
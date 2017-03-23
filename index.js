'use strict'

const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

//middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//GET
//GET
app.get('/api/product', (req, res) => {
	res.send(200,{products:[]})
})

app.get('/api/product/:productId', (req, res) => {

	
})

app.post('/api/product', (req, res) => {
	console.log(req.body)
	res.status(200).send({message: 'El producto recibido'})
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})

mongoose.connect('mongodb://localhost:27017/shop',(err, res) => {
	if(err){
		console.log("Error al conectarse a la base de datos: ${err}")
	}
	console.log("Conexion a la base de datos ")
	app.listen(port, () => {
		console.log(`API REST corriendo ${port}`)
	})
})
	

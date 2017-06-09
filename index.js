'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
const port = process.env.PORT || 3000

mongoose.connect(config.db,(err, res) => {
	if(err){
		return console.log(`Error al conectarse a la base de datos: ${err}`)
	}
	console.log("Conexion a la base de datos ")
	app.listen(config.port, () => {
		console.log(`API REST corriendo ${config.port}`)
	})
})

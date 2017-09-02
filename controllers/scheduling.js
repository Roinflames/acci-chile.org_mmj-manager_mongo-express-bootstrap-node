var express = require('express')
var request = require('request');
var router = express.Router()

///var doPost()

//// DO GET's
//CALL scheduling
request('http://api.fernandopiza.xyz/membresias/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
				//console.log(body);
				membresias = JSON.parse(body);
				//console.log(membresias);
		 }
		 else {
		 	console.log('Error ('+ response.statusCode +') No se han podido solicitar las membresias.')
		 }
})
request('http://api.fernandopiza.xyz/horas/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
				//console.log(body);
				horas = JSON.parse(body);
				for (var i = 0; i < 13; i++) {
					//console.log(horas[i].id);
				}

		 }
		 else {
		 	console.log('Error ('+ response.statusCode +') No se han podido obtener las horas disponibles.')
		 }
})
// TODO
request('http://api.fernandopiza.xyz/usuario/'+'roro', function (error, response, body) {
		if (!error && response.statusCode == 200) {
				//console.log(body);
				usuario_id = JSON.parse(body);
				//console.log(usuario_id);
		 }
		 else {
		 	console.log('Error ('+ response.statusCode +')  No se ha podido obtener el usuario <usuario>')
		 }
})
//end CALL scheduling
// index hora_usuarios
request('http://api.fernandopiza.xyz/hora_usuarios', function (error, response, body) {
		if (!error && response.statusCode == 200) {
				//console.log(body);
				index = JSON.parse(body);
				console.log(index[i])
				for (var i = 0; i < index.length; i++) {
					// DPONG
					console.log(index[i])
				}

		 }
		 else {
		 	console.log('Error ('+ response.statusCode +') No se ha podido solicitar las horas de usuario.')
			//console.log(body)
		 }
})
// POST hora usuario
//fecha, hora_medica_id,usuario_id,membresia_id

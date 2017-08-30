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
		 	console.log('error');
		 }
})
request('http://api.fernandopiza.xyz/horas/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
				//console.log(body);
				horas = JSON.parse(body);
				//console.log(horas);
		 }
		 else {
		 	console.log('error');
		 }
})
// TODO
request('http://api.fernandopiza.xyz/usuario/'+'roro', function (error, response, body) {
		if (!error && response.statusCode == 200) {
				//console.log(body);
				usuario_id = JSON.parse(body);
				console.log(usuario_id);
		 }
		 else {
		 	console.log('error');
		 }
})
//end CALL scheduling
// index hora_usuarios
request('http://api.fernandopiza.xyz/hora_usuarios', function (error, response, body) {
		if (!error && response.statusCode == 200) {
				//console.log(body);
				index = JSON.parse(body);
				for (var i = 0; i < index.length; i++) {
					// DPONG
					console.log(index[i])
				}

		 }
		 else {
		 	console.log('error');
		 }
})
// POST hora usuario
//fecha, hora_medica_id,usuario_id,membresia_id

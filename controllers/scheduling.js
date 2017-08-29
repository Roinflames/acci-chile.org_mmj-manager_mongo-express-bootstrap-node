var express = require('express')
var request = require('request');
var router = express.Router()

///var doPost()

//// DO GET's
//CALL scheduling
name = []
request('http://api.fernandopiza.xyz/membresias/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
				//console.log(body);
				membresias = JSON.parse(body);
				//console.log(membresias);
		 }
})
request('http://api.fernandopiza.xyz/horas/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
				//console.log(body);
				horas = JSON.parse(body);
				//console.log(horas);
		 }
})
//end CALL scheduling

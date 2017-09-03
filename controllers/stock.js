var express = require('express')
var request = require('request');
var router = express.Router()

// GLOBALS
id = []
nombres = []
clasificacion = []
thc = []
cbd = []
cbn = []
cnc = []
stock = []
ficha = []
//END GLOBALS
//GET FLORES
request('http://api.fernandopiza.xyz/flores/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
        var role
        //console.log(body);
				menu = JSON.parse(body);
				//console.log(menu);
        menu.forEach(function(menu) {
					id.push(menu.id)
					nombres.push(menu.nombre)
					clasificacion.push(menu.clasificacion.nombre)
          //if (role != 'admin') {
          if(menu.stock>0){
							stock.push("Disponible")
					}
					else {
							stock.push("No disponible")
  					}
          //}
					//ficha.push(obj.ficha)
				})
		 }
})

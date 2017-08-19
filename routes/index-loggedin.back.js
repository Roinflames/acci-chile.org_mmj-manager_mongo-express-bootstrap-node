var express = require('express')
var request = require('request');
var router = express.Router()

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}
//get Flores
request('http://Api.fernandopiza.xyz/flores/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
				//console.log(body);
				menu = JSON.parse(body);
				//console.log(menu);
				nombres = []
				clasificacion = []
				thc = []
				cbd = []
				cbn = []
				cnc = []
				stock = []
		 }
})
//end get flores
//passport
module.exports = function(passport){

  router.get('/index-loggedin', isAuthenticated, function(req, res){
    res.render('index-loggedin', {title:'ACCI', usuario: req.user.username});
  });

////////////////////// STOCK ////////////////////////////////
	//get stock
	router.get('/stock', function(req, res){
		//////////////////
		
		//////////////////
		menu.forEach(function(menu) {
			nombres.push(menu.nombre)
			clasificacion.push(menu.clasificacion.nombre)

		});
		console.log(nombres, clasificacion);
		if (menu > 0) {
				menu1 = "Disponible"
		}
		else {
				menu1 = "No disponible"
		}
		res.render('stock', {title:'ACCI', nombre1: nombres[0], nombre2:nombres[1], nombre3:nombres[2], nombre4: nombres[3],
		nombre5: nombres[4], nombre6: nombres[5], nombre7: nombres[6], nombre8: nombres[7], nombre9: nombres[8],
		nombre10: nombres[9], nombre11: nombres[10], nombre12: nombres[11], nombre13: nombres[12], nombre14: nombres[13],
		nombre15: nombres[14], nombre16: nombres[15], nombre17: nombres[16], nombre18: nombres[17], nombre19: nombres[18],
		nombre20: nombres[19], nombre21: nombres[20],

		clasificacion1: menu[0].clasificacion.nombre, clasificacion2:menu[1].clasificacion.nombre, clasificacion3:menu[2].clasificacion.nombre,
		clasificacion4: menu[3].clasificacion.nombre, clasificacion5: menu[4].clasificacion.nombre, clasificacion6:menu[5].clasificacion.nombre, clasificacion7:menu[6].clasificacion.nombre,
		clasificacion8:menu[7].clasificacion.nombre, clasificacion9:menu[8].clasificacion.nombre, clasificacion10:menu[9].clasificacion.nombre, clasificacion11:menu[10].clasificacion.nombre,
		clasificacion12:menu[11].clasificacion.nombre, clasificacion13:menu[12].clasificacion.nombre, clasificacion14:menu[13].clasificacion.nombre, clasificacion15:menu[14].clasificacion.nombre,
		clasificacion16:menu[15].clasificacion.nombre, clasificacion17:menu[16].clasificacion.nombre, clasificacion18:menu[17].clasificacion.nombre, clasificacion19:menu[18].clasificacion.nombre,
		clasificacion20:menu[19].clasificacion.nombre, clasificacion21:menu[20].clasificacion.nombre,
		//THC
		thc1: menu[0].thc, thc2:menu[1].thc, thc3:menu[2].thc,
		thc4: menu[3].thc, thc5: menu[4].thc, thc6:menu[5].thc, thc7:menu[6].thc,
		thc8:menu[7].thc, thc9:menu[8].thc, thc10:menu[9].thc, thc11:menu[10].thc,
		thc12:menu[11].thc, thc13:menu[12].thc, thc14:menu[13].thc, thc15:menu[14].thc,
		thc16:menu[15].thc, thc17:menu[16].thc, thc18:menu[17].thc, thc19:menu[18].thc,
		thc20:menu[19].thc, thc21:menu[20].thc,
		//CBD
		//CBN
		cbd1: menu[0].cbn, cbd2:menu[1].cbn, cbd3:menu[2].cbn,
		cbd4: menu[3].cbn, cbd5: menu[4].cbn, cbd6:menu[5].cbn, cbd7:menu[6].cbn,
		cbd8:menu[7].cbn, cbd9:menu[8].cbn, cbd10:menu[9].cbn, cbd11:menu[10].cbn,
		cbd12:menu[11].cbn, cbd13:menu[12].cbn, cbd14:menu[13].cbn, cbd15:menu[14].cbn,
		cbd16:menu[15].cbn, cbd17:menu[16].cbn, cbd18:menu[17].cbn, cbd19:menu[18].cbn,
		cbd20:menu[19].cbn, cbd21:menu[20].cbn,
		//CNC
		cnc1: menu[0].cnc, cnc2:menu[1].cnc, cnc3:menu[2].cnc,
		cnc4: menu[3].cnc, cnc5: menu[4].cnc, cnc6:menu[5].cnc, cnc7:menu[6].cnc,
		cnc8:menu[7].cnc, cnc9:menu[8].cnc, cnc10:menu[9].cnc, cnc11:menu[10].cnc,
		cnc12:menu[11].cnc, cnc13:menu[12].cnc, cnc14:menu[13].cnc, cnc15:menu[14].cnc,
		cnc16:menu[15].cnc, cnc17:menu[16].cnc, cnc18:menu[17].cnc, cnc19:menu[18].cnc,
		cnc20:menu[19].cnc, cnc21:menu[20].cnc,

		stock1: menu1, stock2:menu[1].stock, stock3:menu[2].stock,
		stock4: menu[3].stock, stock5: menu[4].stock, stock6:menu[5].stock, stock7:menu[6].stock,
		stock8:menu[7].stock, stock9:menu[8].stock, stock10:menu[9].stock, stock11:menu[10].stock,
		stock12:menu[11].stock, stock13:menu[12].stock, stock14:menu[13].stock, stock15:menu[14].stock,
		stock16:menu[15].stock, stock17:menu[16].stock, stock18:menu[17].stock, stock19:menu[18].stock,
		stock20:menu[19].stock, stock21:menu[20].stock
	});
	});
	//end stock

	////////////////////// AGENDAMIENTOS //////////////////////
	//get scheduling 'WORK'
	router.get('/scheduling', function(req, res){
			res.render('scheduling', {title: 'ACCI'})
	})
	//end get scheduling
	//post scheduling
	request.post('http://api.fernandopiza.xyz/agendamientos', {
				form:{
					hora_medica_id:'value',
					usuario_id:'value',
					fecha:'value',
					membresia_id:'value',
				}
	})
	//end  post scheduling

	////////////////////// DECLARACIONES //////////////////////
	//get declaraciones
	router.get('/declaraciones', isAuthenticated, function(req, res){
    res.render('declaraciones', {title:'ACCI'});
  });
	//end declaraciones

	////////////////////// GALERIA //////////////////////
	// get galeria
	router.get('/galeria', isAuthenticated, function(req, res){
    res.render('galeria', {title:'ACCI'});
  });
	//end galeria

	////////////////////// FICHA //////////////////////
	//get profile
	router.get('/profile', isAuthenticated, function(req, res){
    res.render('profile', {title:'ACCI', usuario: req.user.username, rut: req.user.rut, name: req.user.name,
		age: req.user.age, phone: req.user.phone, email: req.user.email, address: req.user.address, region: req.user.region,
		comuna: req.user.comuna,

		sick: req.user.sick, operaciones: req.user.operaciones, alergias: req.user.alergias,
		medicamentos: req.user.medicamentos, declaracion: req.user.declaracion,

		sender: req.user.sender, dosis: req.user.dosis, product: req.user.product, diary: req.user.diary,
		week: req.user.week, month: req.user.month, other: req.user.other, sign: req.user.sign
	});
  });
	//end get profile
	return router;
}

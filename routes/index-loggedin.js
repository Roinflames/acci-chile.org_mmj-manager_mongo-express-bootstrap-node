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

var fs = require('fs'), obj
// Read the file and send to the callback
fs.readFile('public/json/links.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
		//console.log(obj);
    // You can now play with your datas
}
//get Flores
request('http://Api.fernandopiza.xyz/flores/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
				//console.log(body);
				menu = JSON.parse(body);
				console.log(menu[0]);
				id = []
				nombres = []
				clasificacion = []
				thc = []
				cbd = []
				cbn = []
				cnc = []
				stock = []
				ficha = []
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
		menu.forEach(function(menu) {
			id.push(menu.id)
			nombres.push(menu.nombre)
			clasificacion.push(menu.clasificacion.nombre)
			if(menu.stock>0){
					stock.push("Disponible")
			}
			else {
					stock.push("No disponible")
			}
			ficha.push(obj.ficha)
		});
		//console.log(nombres, clasificacion);
		if (menu > 0) {
				menu1 = "Disponible"
		}
		else {
				menu1 = "No disponible"
		}
		res.render('stock', {title:'ACCI'});
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

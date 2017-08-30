var express = require('express')
var request = require('request')
var router = express.Router()
// controllers
var stock = require('../controllers/stock')
var scheduling = require('../controllers/scheduling')
// auth middleware
var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}
//GET FLORES
request('http://api.fernandopiza.xyz/flores/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
        //var role
        //console.log(body);
				menu = JSON.parse(body);
				//console.log(menu);
        menu.forEach(function(menu) {
					id.push(menu.id)
					nombres.push(menu.nombre)
					clasificacion.push(menu.clasificacion.nombre)
          //if (role != 'admin') {
          if(menu.stock>0){
					//		stock.push("Disponible")
					}
					else {
					//		stock.push("No disponible")
  					}
          //}
					//ficha.push(obj.ficha)
				})
		 }
})
//// POST
function postHora(req, res) {
	username = req.user.username
	console.log(req.user.username);
	uriCall = 'http://api.fernandopiza.xyz/hora_usuarios/'
	console.log(uriCall);
	request(
      { method: 'post',
        uri: uriCall,
        form:
          {
						hora_usuario: {
							nombre: req.body.nombre,
	            fecha: req.body.fecha,
							hora_medica_id: req.body.hora_medica_id,
							usuario_id: req.body.usuario_id,
							membresia_id: req.body.membresia_id
						}
						/* "hora_usuario": {"hora_medica_id": 1,"usuario_id": 1,"membresia_id": 2,"fecha":"2017-08-29"}}
						*/


          }
      }, function (error, response, body) {
        if(!error && response.statusCode == 200){
          hora = JSON.parse(body);
          console.log(hora);
					//console.log(uri)
					return hora
        } else {
          console.log('error: '+ response.statusCode)
          console.log(body)
					return body
        }
      })

}
//passport
module.exports = function(passport){

  router.get('/index-loggedin', isAuthenticated, function(req, res){
    res.render('index-loggedin', {title:'ACCI', usuario: req.user.username});
  });
////////////////////// STOCK ////////////////////////////////
	//get stock
	router.get('/stock', isAuthenticated, function(req, res){
		res.render('stock', {title:'ACCI'});
	});
	router.get('/editStock', isAuthenticated, function(req, res){
		res.render('editStock', {title:'ACCI'});
	});
////////////////////// AGENDAMIENTOS //////////////////////
/////////////////////// MEMBRESIAS /////////////////////////
	router.get('/scheduling', isAuthenticated, function(req, res){
			res.render('scheduling', {title: 'ACCI'})
	})
	router.post('/scheduling', isAuthenticated, function(req, res){
			var body = postHora(req, res)
			console.log(body);
			res.render('scheduling', {title: 'ACCI', estado: body})
	})
	router.get('/history', isAuthenticated, function(req, res){
			var body = postHora(req, res)
			res.render('history', {title: 'ACCI', estado: body})
	})
////////////////////// DECLARACIONES //////////////////////
	//get declaraciones
	router.get('/declaraciones', isAuthenticated, function(req, res){
    res.render('declaraciones', {title:'ACCI'});
  });
////////////////////// GALERIA //////////////////////
	// get galeria
	router.get('/galeria', isAuthenticated, function(req, res){
    res.render('galeria', {title:'ACCI'});
  });
////////////////////// FICHA DE SOCIO //////////////////////
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

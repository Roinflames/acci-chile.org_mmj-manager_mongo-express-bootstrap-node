var express = require('express')
var request = require('request')

var pcl = require('pretty-console.log')
pcl.enable()

var globalUser = ''
var membership = ''
var schedule = ''
var status = ''

var router = express.Router()
// controllers
//var stock = require('../controllers/stock')
//var scheduling = require('../controllers/scheduling')
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
// Admin middleware
var isAdmin = function (req, res, next) {
	if (role == 'admin')
		return next()
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/index-loggedin')
}
// (1)
// GET index usuarios
var getApiUsers = function (req, res, next) {
	uriCall = 'http://api.fernandopiza.xyz/usuarios/'
	//console.log(uriCall);
	request(
      { method: 'get',
        uri: uriCall
      }, function (error, response, body) {
					if (!error && response.statusCode == 200) {
							//console.log(body);
							users = JSON.parse(body);
							console.log('Listado de usuarios obtenido con éxito!');
							//pcl(users);
					 }
					 else {
					 	console.log('Error ('+ response.statusCode +')  No se ha podido obtener el usuario <usuario>')
					 }
			})
}
// (2)
// GET usuario por ID
var getApiUserId = function (req, res, name, next) {
	var nombre = name
	uriCall = 'http://api.fernandopiza.xyz/usuario/' + nombre
	//console.log(uriCall);
	request(
      { method: 'get',
        uri: uriCall
      }, function (error, response, body) {
					if (!error && response.statusCode == 200) {
							//console.log(body);
							usuario_id = JSON.parse(body);
							console.log('Datos de usuarios obtenidos con éxito! Usuario '+ usuario_id.id);
							//pcl(usuario_id)
							globalUser = usuario_id
					 }
					 else {
					 	console.log('Error ('+ response.statusCode +')  No se ha podido obtener el usuario ' + nombre)
					 }

			})
}
// (3)
// POST apiUser
var postApiUser = function (req, res, next) {
	uriCall = 'http://api.fernandopiza.xyz/usuarios'
	//console.log(uriCall);
	console.log('req.body' + req.body);
	request(
	    { method: 'post',
	      uri: uriCall,
	      form:
	        {
	          usuario: {
	            nombre: req.body.username,
	            correo: req.body.email,
	            numero: req.body.phone,
	            direccion: req.body.address
	          }
	        }
	    },
	    function (error, response, body) {
	      //console.log(body);
	      if(!error && response.statusCode == 201){
					console.log(body);
	        user = JSON.parse(body);
	        console.log('Usuario creado con éxito. ' + user);
	      }
	      else {
	        console.log('Lo sentimos, el usuario no ha sido registrado. Vuelva a intentarlo más tarde.')
	        console.log(body + 'error: ' + response.statusCode)
	      }
	    }
	)
}
// (4)
// GET FLORES
var getFlores = function (req, res, next) {
	uriCall = 'http://api.fernandopiza.xyz/flores/'
	//console.log(uriCall);
	request(
      { method: 'get',
        uri: uriCall
      }, function (error, response, body) {
				if (!error && response.statusCode == 200) {
						menu = JSON.parse(body);
						console.log('Variedades de flores obtenidas con éxito!');
						//pcl(menu);
				 }
				 else {
				 	console.log('Lo sentimos. Error ('+ response.statusCode +') No se ha podido solicitar el stock.');
				 }
		})
}
// (5)
// GET index hora_usuarios
var getHorasIndex = function (req, res, next) {
	uriCall = 'http://api.fernandopiza.xyz/hora_usuarios'
	//console.log(uriCall);
	request(
      { method: 'get',
        uri: uriCall
      }, function (error, response, body) {
					if (!error && response.statusCode == 200) {
							//console.log(body);
							indexHoras = JSON.parse(body);
							console.log('Horas de usuario obtenidas con éxito!')
							pcl(indexHoras)
					 }
					 else {
					 	console.log('Error ('+ response.statusCode +') No se ha podido solicitar las horas de usuario.')
						//console.log(body)
					 }
			})
}
// (6) TODO - agragar comentario en modelo api
// POST apiHora - ISSUE usuario_id
var postHora = function (req, res, status, globalUser, next) {
	uriCall = 'http://api.fernandopiza.xyz/hora_usuarios/'
	//console.log(uriCall);
	request(
      { method: 'post',
        uri: uriCall,
        form:
          {
						hora_usuario: {
							nombre: req.body.nombre,
	            fecha: req.body.fecha,
							hora_medica_id: req.body.hora_medica_id,
							usuario_id: globalUser,
							membresia_id: req.body.membresia_id
						}
          }
      }, function (error, response, body) {
        if(!error && response.statusCode == 201){
          hora = JSON.parse(body);
					console.log('Hora registrada con éxito!');
					//pcl(hora);
					//console.log(uri)
					status = 'test'
        } else {
          console.log('Lo sentimos, no hemos podido crear su hora. Vuelva a intentarlo más tarde.')
          console.log(body + 'error:' + response.statusCode)
					status = response.statusCode
        }
      })
}
//CALL scheduling
// (7)
var getMembresias = function (req, res, next) {
	uriCall = 'http://api.fernandopiza.xyz/membresias'
	//console.log(uriCall);
	request(
      { method: 'get',
        uri: uriCall
      }, function (error, response, body) {
					if (!error && response.statusCode == 200) {
							//console.log(body);
							membresias = JSON.parse(body);
							console.log('Membresias de usuario obtenidas con éxito!')
							//pcl(membresias)
							membership = membresias
					 }
					 else {
					 	console.log('Error ('+ response.statusCode +') No se ha podido solicitar las horas de usuario.')
						//console.log(body)
					 }
			})
}
// (8)
var getHorarios = function (req, res, next) {
	uriCall = 'http://api.fernandopiza.xyz/horas'
	//console.log(uriCall);
	request(
      { method: 'get',
        uri: uriCall
      }, function (error, response, body) {
					if (!error && response.statusCode == 200) {
							//console.log(body);
							horas = JSON.parse(body);
							console.log('Horarios de atención obtenidas con éxito!')
							//pcl(horas)
							schedule = horas
					 }
					 else {
					 	console.log('Error ('+ response.statusCode +') No se ha podido solicitar las horas de usuario.')
						//console.log(body)
					 }
			})
}
//end CALL scheduling
// MAIN
module.exports = function(passport){

  router.get('/index-loggedin', isAuthenticated, function(req, res){
		var name = req.user.username
		console.log('req.user: ' + req.user);
		var body = getApiUserId(req, res, name)
		getApiUsers()
		getFlores()
		getHorarios()
		getMembresias()
		getHorasIndex()
    res.render('index-loggedin', {title:'ACCI', usuario: req.user.username})
  })
////////////////////// USERS ////////////////////////////////
	router.get('/user', isAuthenticated, isAdmin, function(req, res) {
	  res.render('ficha', {title: 'ACCI'})
	})
	router.post('/user', isAuthenticated, isAdmin, function(req, res){
			var name = req.user.username
			//var body = getApiUserId(req, res, name)
			var body2 = postApiUser(req, res)
			res.render('index-loggedin', {title: 'ACCI', estado: status})
	})
////////////////////// STOCK ////////////////////////////////
	//get stock
	router.get('/stock', isAuthenticated, function(req, res){
		//var body = getFlores(req, res)
		res.render('stock', {title:'ACCI'})
	});
	router.get('/editStock', isAuthenticated, function(req, res){
		res.render('editStock', {title:'ACCI'})
	});
////////////////////// AGENDAMIENTOS //////////////////////
	router.get('/scheduling', isAuthenticated, function(req, res){
			res.render('scheduling', {title: 'ACCI', estado: status})
	})
	router.post('/scheduling', isAuthenticated, function(req, res){
			getApiUserId()
			var body = postHora(req, res, status, globalUser)
			console.log('hora' + status);
			res.render('scheduling', {title: 'ACCI', estado: body})
	})
	router.put('/scheduling', isAuthenticated, function(req, res){
			//var body = putHora(req, res)
			res.send('put scheduling', {title: 'ACCI', estado: body})
	})
	router.delete('/scheduling', isAuthenticated, function(req, res){
			//var body = deleteHora(req, res)
			res.send('delete scheduling', {title: 'ACCI', estado: body})
	})
	router.get('/history', isAdmin, isAuthenticated, function(req, res){
			res.render('history', {title: 'ACCI'})
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

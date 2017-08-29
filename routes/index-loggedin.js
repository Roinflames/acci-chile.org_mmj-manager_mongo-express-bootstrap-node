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
////////////////////// AGENDAMIENTOS //////////////////////
/////////////////////// MEMBRESIAS /////////////////////////
	router.get('/scheduling', function(req, res){
			res.render('scheduling', {title: 'ACCI'})
	})
	router.get('/history', function(req, res){
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

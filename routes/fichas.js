var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(){
  // Descripción
	router.get('/1', isAuthenticated, function(req, res){
    res.render('fichas/1', {title:'ACCI'});
  });

	router.get('/2', isAuthenticated, function(req, res){
    res.render('fichas/2', {title:'ACCI'});
  });

	router.get('/3', isAuthenticated, function(req, res){
    res.render('fichas/3', {title:'ACCI'});
  });
	router.get('/4', isAuthenticated, function(req, res){
    res.render('fichas/4', {title:'ACCI'});
  });
	router.get('/5', isAuthenticated, function(req, res){
    res.render('fichas/5', {title:'ACCI'});
  });
	router.get('/6', isAuthenticated, function(req, res){
    res.render('fichas/6', {title:'ACCI'});
  });
	router.get('/7', isAuthenticated, function(req, res){
    res.render('fichas/7', {title:'ACCI'});
  });
	router.get('/8', isAuthenticated, function(req, res){
    res.render('fichas/8', {title:'ACCI'});
  });
	router.get('/9', isAuthenticated, function(req, res){
    res.render('fichas/9', {title:'ACCI'});
  });
	router.get('/10', isAuthenticated, function(req, res){
    res.render('fichas/10', {title:'ACCI'});
  });
	router.get('/11', isAuthenticated, function(req, res){
    res.render('fichas/11', {title:'ACCI'});
  });
	router.get('/12', isAuthenticated, function(req, res){
    res.render('fichas/12', {title:'ACCI'});
  });
	router.get('/13', isAuthenticated, function(req, res){
    res.render('fichas/13', {title:'ACCI'});
  });
	router.get('/14', isAuthenticated, function(req, res){
    res.render('fichas/14', {title:'ACCI'});
  });
	router.get('/15', isAuthenticated, function(req, res){
    res.render('fichas/15', {title:'ACCI'});
  });
	router.get('/16', isAuthenticated, function(req, res){
    res.render('fichas/16', {title:'ACCI'});
  });
	router.get('/17', isAuthenticated, function(req, res){
    res.render('fichas/17', {title:'ACCI'});
  });
	router.get('/18', isAuthenticated, function(req, res){
    res.render('fichas/18', {title:'ACCI'});
  });
	router.get('/19', isAuthenticated, function(req, res){
    res.render('404', {title:'ACCI'});
  });
	router.get('/20', isAuthenticated, function(req, res){
    res.render('404', {title:'ACCI'});
  });
	router.get('/21', isAuthenticated, function(req, res){
    res.render('404', {title:'ACCI'});
  });
	return router;
}

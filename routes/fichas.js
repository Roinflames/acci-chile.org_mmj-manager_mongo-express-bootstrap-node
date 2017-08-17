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
	router.get('/aok', isAuthenticated, function(req, res){
    res.render('fichas/aok', {title:'ACCI'});
  });

	router.get('/ak', isAuthenticated, function(req, res){
    res.render('fichas/ak', {title:'ACCI'});
  });

	router.get('/bu', isAuthenticated, function(req, res){
    res.render('fichas/bu', {title:'ACCI'});
  });

	return router;
}

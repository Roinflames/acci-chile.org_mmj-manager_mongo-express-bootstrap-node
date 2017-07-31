var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/index');
}

module.exports = function(){
  // Descripción
	router.get('/descripcion', function(req, res) {
	  res.render('descripcion', { title: 'DM-ACCI' });
	});
  //especies
  router.get('/especies', function(req, res) {
	  res.render('especies', { title: 'DM-ACCI' });
	});
  //terpenos
  router.get('/terpenos', function(req, res) {
	  res.render('terpenos', { title: 'DM-ACCI' });
	});
  //cannabinoides
  router.get('/cannabinoides', function(req, res) {
    res.render('cannabinoides', { title: 'DM-ACCI' });
  });
	router.get('/sist-endo', function(req, res) {
    res.render('sist-endo', { title: 'DM-ACCI' });
  });
	router.get('/medicinal', function(req, res) {
    res.render('medicinal', { title: 'DM-ACCI' });
  });
	router.get('/legal', function(req, res) {
    res.render('legal', { title: 'DM-ACCI' });
  });

	return router;
}

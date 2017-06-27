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

module.exports = function(passport){
  //Logueo User
  router.get('/signin', function(req, res){
    res.render('signin');
  });

	router.post('/login', passport.authenticate('login', {
		successRedirect: '/descripcion',
		failureRedirect: '/',
		failureFlash : true
	}));
  //End Logueo User

  //Register User
	router.get('/signup', function(req, res){
		res.render('signup',{message: req.flash('message')});
	});

	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/',
		failureRedirect: '/descripcion',
		failureFlash : true
	}));
  //End Register User

	//Logout user
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}

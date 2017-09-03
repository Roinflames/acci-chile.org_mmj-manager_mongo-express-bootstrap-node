var express = require('express')
var request = require('request')
var indexLoggedin = require('../routes/index-loggedin')
var router = express.Router()

var isAdmin = function (req, res, next) {
	if (role == 'admin')
		return next()
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/index-loggedin')
}

module.exports = function(passport){
  //Logueo User
  router.get('/signin', function(req, res){
    res.render('signin', {title: 'ACCI'});
  });
	router.post('/login', passport.authenticate('login', {
    successRedirect: '/index-loggedin',
		failureRedirect: '/',
		failureFlash : true,
	}))
  //Register User
	router.get('/signup', isAdmin, function(req, res){
		res.render('ficha',{message: req.flash('message'), title: 'ACCI'});
	});
	router.post('/signup', isAdmin, passport.authenticate('signup', {
		successRedirect: '/user',
		failureRedirect: '/',
		failureFlash : true
	}));
	//Logout user
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
	return router;
}

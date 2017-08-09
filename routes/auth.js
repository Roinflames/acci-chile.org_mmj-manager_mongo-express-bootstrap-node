var express = require('express');
var router = express.Router();

module.exports = function(passport){
  //Logueo User
  router.get('/signin', function(req, res){
    res.render('signin', {title: 'ACCI'});
  });

	router.post('/login', passport.authenticate('login', {
		successRedirect: '/index-loggedin',
		failureRedirect: '/',
		failureFlash : true,
	}));
  //End Logueo User

  //Register User
	router.get('/signup', function(req, res){
		res.render('ficha',{message: req.flash('message'), title: 'ACCI'});
	});

	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/index-loggedin',
		failureRedirect: '/',
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

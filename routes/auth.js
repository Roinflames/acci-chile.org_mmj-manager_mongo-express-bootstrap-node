var express = require('express')
var request = require('request')
var pcl = require("pretty-console.log")

var router = express.Router()

var indexLoggedin = require('../routes/index-loggedin')

function postUser(req, res) {
  console.log(req.body);
  uriCall = 'http://api.fernandopiza.xyz/usuarios'
  //console.log(uriCall);
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
          user = JSON.parse(body)
          pcl.enable()
          console.log(user)
        }
        else {
          pcl.enable()
          console.log('Lo sentimos, el usuario no ha sido registrado. Vuelva a intentarlo más tarde.')
          console.log(body + 'error: '+ response.statusCode)
        }
      }
  )
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
	})), function (){
    var apiUser = postUser(req, res)
  }
  //End Logueo User

  //Register User
	router.get('/signup', function(req, res){
    //var apiUser = postUser(req, res)
		res.render('ficha',{message: req.flash('message'), title: 'ACCI'});
	});

	router.post('/signup', function(req,res){
    var apiUser = postUser(req, res)
  }, passport.authenticate('signup', {
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

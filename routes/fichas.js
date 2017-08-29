var express = require('express');
var request = require('request');
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
  // Get by id
	router.get('/flor*', isAuthenticated, function(req, res){
		var florId = req.url
		florId = florId.replace("/flor", "");
		var url = "http://Api.fernandopiza.xyz/flores/"+florId
		console.log(url);
		//console.log(menu);
		request(url, function (error, response, body) {
				if (!error && response.statusCode == 200) {
						//console.log(body);
						cromatografia = JSON.parse(body);
						//console.log(cromatografia);
				 }
		})
		res.render('fichas/'+florId, {title:'ACCI'});
  });
	return router;
}

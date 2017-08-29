var express = require('express');
var request = require('request');

var stock = require('../controllers/stock')

var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/index-loggedin');
}

var isAdmin = function (req, res, next) {
	var florId = req.url
	florId = florId.replace("/flor", "");
	if (role == 'admin')
		return next()
	if (role != 'admin' && florId != '0')
		return next()
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/stock')
}

function getFlores(req, res){
	var florId = req.url
	florId = florId.replace("/flor", "");
	var url = "http://Api.fernandopiza.xyz/flores/"+florId
	//console.log(url);
	//console.log(menu);
	request(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
					//console.log(body);
					cromatografia = JSON.parse(body);
					//console.log(cromatografia);
			 }
	})
	return florId
}
// PUT
function putFlores(req, res, florId) {
  request(
      { method: 'put',
        uri: 'http://api.fernandopiza.xyz/flores/'+florId,
        form:
          {
            flor:
              {
								nombre: req.body.flor.nombre,
                //
                clasificacion_id: req.body.flor.clasificacion_id,
                //
                thc: req.body.flor.thc,
                //
                cbd: req.body.flor.cbd,
                //
                cbn: req.body.flor.cbn,
                //
                cnc: req.body.flor.cnc,

                humeleneo: '1.01',
                terpileno: '0.75',
                nerolidol1 : '0.08',
                limonene:'0.11',
                myrcene: '0.04',
                beta_pinene: '0.01',
                alpha_pinene: '0.05',
                geraniol: '1.69',
                beta_caryophyllene: '0.51',
                //
                stock: req.body.flor.stock
              }
          }
      }, function (error, response, body) {
        if(!error && response.statusCode == 200){
          membresias = JSON.parse(body);
          //console.log(membresias);
        } else {
          console.log('error: '+ response.statusCode)
          console.log(body)
        }
      })
}

//// POST
function postFlores(req, res) {
	request(
      { method: 'post',
        uri: 'http://api.fernandopiza.xyz/flores/',
        form:
          {
            flor:
              {
								nombre: req.body.nombre,
                //
                clasificacion_id: req.body.clasificacion_id,
                //
                thc: req.body.thc,
                //
                cbd: req.body.cbd,
                //
                cbn: req.body.cbn,
                //
                cnc: req.body.cnc,

                humeleneo: '1.01',
                terpileno: '0.75',
                nerolidol1 : '0.08',
                limonene:'0.11',
                myrcene: '0.04',
                beta_pinene: '0.01',
                alpha_pinene: '0.05',
                geraniol: '1.69',
                beta_caryophyllene: '0.51',
                //
                stock: req.body.stock
              }
          }
      }, function (error, response, body) {
        if(!error && response.statusCode == 200){
          membresias = JSON.parse(body);
          console.log(req.body);
        } else {
          console.log('error: '+ response.statusCode)
          console.log(body)
        }
      })
}

module.exports = function(){
  // Get by id
	router.get('/flor*', isAdmin, function(req, res){
	//router.get('/flor*', isAuthenticated, function(req, res){
		florId = getFlores(req, res)
		res.render('fichas/'+florId, {title:'ACCI'})
  })
	// put by id
	router.put('/flor*', function(req, res){
	//router.put('/flor*', isAuthenticated, function(req, res){
		florId = getFlores(req, res)
		putFlores(req, res, florId)
		res.send("Actualización de registro exitosa!")
  })
	// POST
	router.post('/flores', function(req, res){
		postFlores(req, res)
		res.render('fichas/0', {response: "Operación realizada con éxito!"})
	})
	// delete by id
	router.delete('/flor*', function(req, res){
		res.send("Se ha borrado el registro exitosamente!")
	})
	return router
}

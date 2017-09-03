var express = require('express');
var request = require('request');
var pcl = require('pretty-console.log')
pcl.enable()

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

var privateArea = function (req, res, next) {
	var florId = req.url
	if (role == 'admin')
		return next()
	if (role != 'admin' && florId != '0')
		return next()
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/stock')
}
// (2) TODO - cromatografia (?)
// GET florById
var getFlores = function (req, res, florId) {
	florId = florId.replace("/flor", "")
	uriCall = "http://Api.fernandopiza.xyz/flores/"+florId
	//console.log(uriCall);
	var flor_id
	request(
      { method: 'get',
        uri: uriCall
      }, function (error, response, body, flor_id) {
					if (!error && response.statusCode == 200) {
							//console.log(body);
							cromatografia = JSON.parse(body);
							console.log('Datos obtenidos con éxito! Flor ' + florId);
							//pcl(flor_id)
					 }
					 else {
					 	console.log('Error ('+ response.statusCode +')  No hemos podido atender su solicitus, inténtelo más tarde')
					 }
			})
}
// (3) TODO - argumentos form
// POST
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
// (4) TODO - argumentos form
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
module.exports = function(){
  // GET flor byid
	router.get('/flor*', isAuthenticated, privateArea, function(req, res){
		var florId = req.url
		florId = florId.replace("/flor", "")
		var body = getFlores(req, res, florId)
		console.log(body);
		res.render('fichas/'+florId, {title:'ACCI'})

  })
	// PUT flor byid
	router.put('/flor*', isAuthenticated, privateArea, function(req, res){
		florId = getFlores(req, res)
		putFlores(req, res, florId)
		res.send("Actualización de registro exitosa!")
  })
	// POST flor
	router.post('/flores', isAuthenticated, privateArea, function(req, res){
		postFlores(req, res)
		res.render('fichas/0', {response: "Operación realizada con éxito!"})
	})
	// DELETE flor byid
	router.delete('/flor*', isAuthenticated, privateArea, function(req, res){
		res.send("Se ha borrado el registro exitosamente!")
	})
	return router
}

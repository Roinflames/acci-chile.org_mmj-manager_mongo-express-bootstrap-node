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

// Fylesystem
fs = require('fs')
fs.readFile('./public/json/stock.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  stock = JSON.parse(data);
	console.log(stock);
});

module.exports = function(passport){

  router.get('/index-loggedin', isAuthenticated, function(req, res){
    res.render('index-loggedin', {title:'ACCI', usuario: req.user.username});
  });

	router.get('/stock', isAuthenticated, function(req, res){
		res.render('stock', {title:'ACCI', nombre1: stock.Flores.n1.nombre, nombre2:stock.Flores.n2.nombre, nombre3:stock.Flores.n3.nombre,
		nombre4: stock.Flores.n4.nombre, nombre5: stock.Flores.n5.nombre, nombre6:stock.Flores.n6.nombre, nombre7:stock.Flores.n7.nombre,
		nombre8:stock.Flores.n8.nombre, nombre9:stock.Flores.n9.nombre, nombre10:stock.Flores.n10.nombre, nombre11:stock.Flores.n11.nombre,
		nombre12:stock.Flores.n12.nombre, nombre13:stock.Flores.n13.nombre, nombre14:stock.Flores.n14.nombre, nombre15:stock.Flores.n15.nombre,
		nombre16:stock.Flores.n16.nombre, nombre17:stock.Flores.n17.nombre, nombre18:stock.Flores.n18.nombre, nombre19:stock.Flores.n19.nombre,
		nombre20:stock.Flores.n20.nombre, nombre21:stock.Flores.n21.nombre,

		clasificacion1: stock.Flores.n1.clasificacion, clasificacion2:stock.Flores.n2.clasificacion, clasificacion3:stock.Flores.n3.clasificacion,
		clasificacion4: stock.Flores.n4.clasificacion, clasificacion5: stock.Flores.n5.clasificacion, clasificacion6:stock.Flores.n6.clasificacion, clasificacion7:stock.Flores.n7.clasificacion,
		clasificacion8:stock.Flores.n8.clasificacion, clasificacion9:stock.Flores.n9.clasificacion, clasificacion10:stock.Flores.n10.clasificacion, clasificacion11:stock.Flores.n11.clasificacion,
		clasificacion12:stock.Flores.n12.clasificacion, clasificacion13:stock.Flores.n13.clasificacion, clasificacion14:stock.Flores.n14.clasificacion, clasificacion15:stock.Flores.n15.clasificacion,
		clasificacion16:stock.Flores.n16.clasificacion, clasificacion17:stock.Flores.n17.clasificacion, clasificacion18:stock.Flores.n18.clasificacion, clasificacion19:stock.Flores.n19.clasificacion,
		clasificacion20:stock.Flores.n20.clasificacion, clasificacion21:stock.Flores.n21.clasificacion,

		thc1: stock.Flores.n1.thc, thc2:stock.Flores.n2.thc, thc3:stock.Flores.n3.thc,
		thc4: stock.Flores.n4.thc, thc5: stock.Flores.n5.thc, thc6:stock.Flores.n6.thc, thc7:stock.Flores.n7.thc,
		thc8:stock.Flores.n8.thc, thc9:stock.Flores.n9.thc, thc10:stock.Flores.n10.thc, thc11:stock.Flores.n11.thc,
		thc12:stock.Flores.n12.thc, thc13:stock.Flores.n13.thc, thc14:stock.Flores.n14.thc, thc15:stock.Flores.n15.thc,
		thc16:stock.Flores.n16.thc, thc17:stock.Flores.n17.thc, thc18:stock.Flores.n18.thc, thc19:stock.Flores.n19.thc,
		thc20:stock.Flores.n20.thc, thc21:stock.Flores.n21.thc,

		cbd1: stock.Flores.n1.cbd, cbd2:stock.Flores.n2.cbd, cbd3:stock.Flores.n3.cbd,
		cbd4: stock.Flores.n4.cbd, cbd5: stock.Flores.n5.cbd, cbd6:stock.Flores.n6.cbd, cbd7:stock.Flores.n7.cbd,
		cbd8:stock.Flores.n8.cbd, cbd9:stock.Flores.n9.cbd, cbd10:stock.Flores.n10.cbd, cbd11:stock.Flores.n11.cbd,
		cbd12:stock.Flores.n12.cbd, cbd13:stock.Flores.n13.cbd, cbd14:stock.Flores.n14.cbd, cbd15:stock.Flores.n15.cbd,
		cbd16:stock.Flores.n16.cbd, cbd17:stock.Flores.n17.cbd, cbd18:stock.Flores.n18.cbd, cbd19:stock.Flores.n19.cbd,
		cbd20:stock.Flores.n20.cbd, cbd21:stock.Flores.n21.cbd,

		cnc1: stock.Flores.n1.cnc, cnc2:stock.Flores.n2.cnc, cnc3:stock.Flores.n3.cnc,
		cnc4: stock.Flores.n4.cnc, cnc5: stock.Flores.n5.cnc, cnc6:stock.Flores.n6.cnc, cnc7:stock.Flores.n7.cnc,
		cnc8:stock.Flores.n8.cnc, cnc9:stock.Flores.n9.cnc, cnc10:stock.Flores.n10.cnc, cnc11:stock.Flores.n11.cnc,
		cnc12:stock.Flores.n12.cnc, cnc13:stock.Flores.n13.cnc, cnc14:stock.Flores.n14.cnc, cnc15:stock.Flores.n15.cnc,
		cnc16:stock.Flores.n16.cnc, cnc17:stock.Flores.n17.cnc, cnc18:stock.Flores.n18.cnc, cnc19:stock.Flores.n19.cnc,
		cnc20:stock.Flores.n20.cnc, cnc21:stock.Flores.n21.cnc,

		stock1: stock.Flores.n1.stock, stock2:stock.Flores.n2.stock, stock3:stock.Flores.n3.stock,
		stock4: stock.Flores.n4.stock, stock5: stock.Flores.n5.stock, stock6:stock.Flores.n6.stock, stock7:stock.Flores.n7.stock,
		stock8:stock.Flores.n8.stock, stock9:stock.Flores.n9.stock, stock10:stock.Flores.n10.stock, stock11:stock.Flores.n11.stock,
		stock12:stock.Flores.n12.stock, stock13:stock.Flores.n13.stock, stock14:stock.Flores.n14.stock, stock15:stock.Flores.n15.stock,
		stock16:stock.Flores.n16.stock, stock17:stock.Flores.n17.stock, stock18:stock.Flores.n18.stock, stock19:stock.Flores.n19.stock,
		stock20:stock.Flores.n20.stock, stock21:stock.Flores.n21.stock
	});
	});

	router.get('/declaraciones', isAuthenticated, function(req, res){
    res.render('declaraciones', {title:'ACCI'});
  });

	router.get('/galeria', isAuthenticated, function(req, res){
    res.render('galeria', {title:'ACCI'});
  });

	return router;
}

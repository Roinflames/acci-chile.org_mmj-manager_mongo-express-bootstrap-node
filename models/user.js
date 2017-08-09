
var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
	date: String,
	name: String,
	rut: String,
	age: String,
	phone: String,
	email: String,
	address: String,
	region: String,
	comuna: String,

	sick: String,
	operaciones: String,
	alergias: String,
	medicamentos: String,
	declaracion: String,

	sender: String,
	dosis: String,
	product: String,
	diary: String,
	week: String,
	month: String,
	other: String,
	sign: String,

	username: String,
	password: String,

});

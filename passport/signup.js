var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');
// function postApi()
module.exports = function(passport){

	passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {

            findOrCreateUser = function(){
                // find a user in Mongo with provided username
                User.findOne({ 'username' :  username }, function(err, user) {
                    // In case of any error, return using the done method
                    if (err){
                        console.log('Error in SignUp: '+err);
                        return done(err);
                    }
                    // already exists
                    if (user) {
                        console.log('Ya existe este usuario: '+username);
                        return done(null, false, req.flash('message','El usuario ya existe'));
                    } else {
                        // if there is no user with that email
                        // create the user
                        var newUser = new User();

                        // set the user's local credentials
												newUser.date = req.param('date')
                        newUser.username = username
												newUser.password = createHash(password)

												newUser.name = req.param('name')
												newUser.rut = req.param('rut')
												newUser.age = req.param('age')
												newUser.phone = req.param('phone')
												newUser.email = req.param('email')
												newUser.address = req.param('address')
												newUser.region = req.param('region')
												newUser.comuna = req.param('comuna')

												newUser.sick = req.param('sick')
												newUser.operaciones = req.param('operaciones')
												newUser.alergias = req.param('alergias');
												newUser.medicamentos = req.param('medicamentos')
												newUser.declaracion = req.param('declaracion')

												newUser.sender = req.param('sender')
												newUser.dosis = req.param('dosis');
												newUser.product = req.param('product')
												newUser.diary = req.param('diary')
												newUser.week = req.param('week')
												newUser.month = req.param('month')
												newUser.other = req.param('other')
												newUser.sign = req.param('sign')

                        // save the user
                        newUser.save(function(err) {
                            if (err){
                                console.log('Error al guardar el usuario: '+err);
                                throw err;
                            }
														else {
															console.log('Usuario correctamente registrado');
	                            return done(null, newUser);
														}
                        });
                    }
                });
            };
            // Delay the execution of findOrCreateUser and execute the method
            // in the next tick of the event loop
            process.nextTick(findOrCreateUser);
        })
    )
    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }
}

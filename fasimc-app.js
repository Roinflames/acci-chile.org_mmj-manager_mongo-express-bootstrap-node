var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Rutas
var index = require('./routes/index');
var descripcion = require('./routes/descripcion');
var especies = require('./routes/especies');
var terpenos = require('./routes/terpenos');
var cannabinoides = require('./routes/cannabinoides');
var tratamiento = require('./routes/tratamiento');
//End Rutas
var port = 3000;
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Uso de Rutas
app.use('/', index);
app.use('/', descripcion);
app.use('/', especies);
app.use('/', terpenos);
app.use('/', cannabinoides);
app.use('/', tratamiento);
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
/// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(port, function() {
  console.log("Ejecución: Puerto", port)
})

module.exports = app;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/descripcion', function(req, res) {
  res.render('descripcion', { title: 'DESCRIPCION' });
});

module.exports = router;

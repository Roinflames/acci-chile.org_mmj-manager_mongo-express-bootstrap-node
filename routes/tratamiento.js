var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tratamiento', function(req, res) {
  res.render('tratamiento', { title: 'TRATAMIENTO' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/especies', function(req, res) {
  res.render('especies', { title: 'ESPECIES' });
});

module.exports = router;

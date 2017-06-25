var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cannabinoides', function(req, res) {
  res.render('cannabinoides', { title: 'CANNABINOIDES' });
});

module.exports = router;

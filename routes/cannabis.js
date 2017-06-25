var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cannabis', function(req, res) {
  res.render('cannabis', { title: 'CANNABIS' });
});

module.exports = router;

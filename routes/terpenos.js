var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/terpenos', function(req, res) {
  res.render('terpenos', { title: 'TERPENOS' });
});

module.exports = router;

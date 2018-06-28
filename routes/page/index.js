var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('person_page', { title: 'task' });
});

router.get('/albumdetail', function(req, res, next) {
  res.render('page_album_detail', { title: 'task' });
});


module.exports = router;
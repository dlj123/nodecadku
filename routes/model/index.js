var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.render('mx_list', { title: 'Express' });
});
router.get('/connectlist', function(req, res, next) {
  res.render('mx_connect_list', { title: 'Express' });
});
router.get('/detail', function(req, res, next) {
  res.render('mx_detail', { title: 'Express' });
});
router.get('/albumlist', function(req, res, next) {
  res.render('album_list', { title: 'Express' });
});
router.get('/albumdetail', function(req, res, next) {
  res.render('album_detail', { title: 'Express' });
});
router.get('/upload', function(req, res, next) {
  res.render('mx_upload', { title: 'Express' });
});
module.exports = router;










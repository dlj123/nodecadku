var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lg_reg', { title: 'task' });
});
router.get('/otherlogin', function(req, res, next) {
  res.render('other_lg', { title: 'task' });
});
router.get('/otheregister', function(req, res, next) {
  res.render('other_reg', { title: 'task' });
});
router.get('/forgerpwd', function(req, res, next) {
  res.render('forpwd01', { title: 'task' });
});
router.get('/forgerpwd2', function(req, res, next) {
  res.render('forpwd02', { title: 'task' });
});
router.get('/forgerpwd3', function(req, res, next) {
  res.render('forpwd03', { title: 'task' });
});
router.get('/forgerpwd4', function(req, res, next) {
  res.render('forpwd04', { title: 'task' });
});
module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.render('tasklist', { title: 'task' });
});
router.get('/detail', function(req, res, next) {
  res.render('taskdetail', { title: 'task' });
});
router.get('/sendtask', function(req, res, next) {
  res.render('sendtask', { title: 'task' });
});
module.exports = router;

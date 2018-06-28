var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('members_center', { title: 'task' });
});
router.get('/message', function(req, res, next) {
  res.render('message', { title: 'task' });
});
router.get('/certify', function(req, res, next) {
  res.render('certify', { title: 'task' });
});
router.get('/certify/check', function(req, res, next) {
  res.render('certify_check', { title: 'task' });
});
router.get('/info', function(req, res, next) {
  res.render('personal_info', { title: 'task' });
});
router.get('/safe', function(req, res, next) {
  res.render('acountbind', { title: 'task' });
});
router.get('/safe/email', function(req, res, next) {
  res.render('modifyemail01', { title: 'task' });
});
router.get('/safe/email2', function(req, res, next) {
  res.render('modifyemail02', { title: 'task' });
});
router.get('/safe/email3', function(req, res, next) {
  res.render('modifyemail03', { title: 'task' });
});
router.get('/safe/phone', function(req, res, next) {
  res.render('modifyphone01', { title: 'task' });
});
router.get('/safe/phone2', function(req, res, next) {
  res.render('modifyphone02', { title: 'task' });
});
router.get('/safe/phone3', function(req, res, next) {
  res.render('modifyphone03', { title: 'task' });
});
router.get('/safe/login', function(req, res, next) {
  res.render('modifylg01', { title: 'task' });
});
router.get('/safe/login2', function(req, res, next) {
  res.render('modifylg02', { title: 'task' });
});
router.get('/safe/login3', function(req, res, next) {
  res.render('modifylg03', { title: 'task' });
});
router.get('/safe/pay', function(req, res, next) {
  res.render('modifypay01', { title: 'task' });
});
router.get('/safe/pay2', function(req, res, next) {
  res.render('modifypay02', { title: 'task' });
});
router.get('/safe/pay3', function(req, res, next) {
  res.render('modifypay03', { title: 'task' });
});
router.get('/bind', function(req, res, next) {
  res.render('acountbind02', { title: 'task' });
});
router.get('/bind/email', function(req, res, next) {
  res.render('acountbind_email01', { title: 'task' });
});
router.get('/bind/email02', function(req, res, next) {
  res.render('acountbind_email02', { title: 'task' });
});
router.get('/bind/phone', function(req, res, next) {
  res.render('acountbind_phone01', { title: 'task' });
});
router.get('/bind/phone02', function(req, res, next) {
  res.render('acountbind_phone02', { title: 'task' });
});
router.get('/bookdetail', function(req, res, next) {
  res.render('acountdetail', { title: 'task' });
});
router.get('/bookcharge', function(req, res, next) {
  res.render('charge', { title: 'task' });
});
router.get('/sendarticle', function(req, res, next) {
  res.render('center_article', { title: 'task' });
});
router.get('/sendarticle/publish', function(req, res, next) {
  res.render('publish_article', { title: 'task' });
});
router.get('/sendmodel', function(req, res, next) {
  res.render('center_mx', { title: 'task' });
});
router.get('/sendalbum', function(req, res, next) {
  res.render('centeralbum_list', { title: 'task' });
});
router.get('/sendalbum/create', function(req, res, next) {
  res.render('create_album', { title: 'task' });
});
router.get('/sendtasklist', function(req, res, next) {
  res.render('centertask_list', { title: 'task' });
});
router.get('/sendtask', function(req, res, next) {
  res.render('sendtask', { title: 'task' });
});
router.get('/likealbum', function(req, res, next) {
  res.render('centeralbum_like', { title: 'task' });
});
router.get('/likemodel', function(req, res, next) {
  res.render('center_mx_like', { title: 'task' });
});
router.get('/likedesigner', function(req, res, next) {
  res.render('centerdesigner_like', { title: 'task' });
});
router.get('/listbuy', function(req, res, next) {
  res.render('managelist_buy', { title: 'task' });
});
router.get('/listsell', function(req, res, next) {
  res.render('managelist_sell', { title: 'task' });
});
router.get('/listbuy/detail', function(req, res, next) {
  res.render('managelist_buydetail', { title: 'task' });
});
router.get('/listsell/detail', function(req, res, next) {
  res.render('managelist_selldetail', { title: 'task' });
});
router.get('/scoredetail', function(req, res, next) {
  res.render('score_detail', { title: 'task' });
});
router.get('/getscore', function(req, res, next) {
  res.render('getscore', { title: 'task' });
});
module.exports = router;
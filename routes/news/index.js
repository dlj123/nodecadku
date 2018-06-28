var express = require('express');
var router = express.Router();

router.get('/',function(req,res,nex){

	res.render('news',{ title: 'designer'})
})

router.get('/list',function(req,res,nex){

	res.render('newslist',{ title: 'designer'})
})
router.get('/detail',function(req,res,nex){

	res.render('newsdetail',{ title: 'designer'})
})

module.exports = router;
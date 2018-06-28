var express = require('express');
var router = express.Router();

router.get('/list',function(req,res,nex){

	res.render('designer_list',{ title: 'designer'})
})

module.exports = router;




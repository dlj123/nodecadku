var express = require('express');
var path = require('path');
var ejs = require('ejs');
var port = process.env.PORT || 3000;
var app = express();
// 引入 路由模块
var index = require('./routes/index');
var model = require('./routes/model/index');
var designer = require('./routes/designer/index');
var task = require('./routes/task/index');
var news = require('./routes/news/index');
var about = require('./routes/about/index');
var user = require('./routes/user/index');
var page = require('./routes/page/index');
var login = require('./routes/reg_lg/index');

app.use('/', index);
app.use('/model',model);
app.use('/designer',designer);
app.use('/task',task);
app.use('/news',news);
app.use('/about',about);
app.use('/user',user);
app.use('/page',page);
app.use('/login',login);
// 设置视图文件目录
// 
app.set('views', path.join(__dirname,'views'));

// app.set('view engine' , 'ejs'); //设置模板引擎为ejs
app.set('view engine' , 'html'); //设置模板引擎为html
app.engine('.html' , ejs.__express);
app.use( express.static(path.join(__dirname, 'public')) );  // 配置静态资源目录
app.listen(port);
































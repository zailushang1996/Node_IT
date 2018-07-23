var express = require('express');
/*实例化*/
var app = new express();
let ejs = require('ejs');
let bodyParser = require('body-parser');

//配置body-parser中间件
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

/*应用级中间件  匹配所有路由*/
app.use(function (req, res, next) {
    console.log(new Date());
    next();
});
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.send("你好express");
});

app.get('/login',function (req, res) {
    res.render('login');
})

app.get('/news', (req, res) => {
    res.send("news模块");
});

app.post('/doLogin',function (req, res) {
    console.log(req.body);

})

app.listen(3000, '127.0.0.1');
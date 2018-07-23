var express = require('express');
/*实例化*/
var app = new express();
/*应用级中间件  匹配所有路由*/
app.use(function (req, res, next) {
    console.log(new Date());
    next();
})

app.get('/', function (req, res) {
    res.send("你好express");
});

app.get('/news', (req, res) => {
    res.send("news模块");
})

app.listen(3000, '127.0.0.1');
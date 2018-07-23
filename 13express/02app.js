let express = require('express');
/*实例化*/
let app = new express();

app.get('/', function (req, res) {
    res.send("你好express");
});

app.get('/news', (req, res) => {
    res.send("news模块");
});

app.get('/login', (req, res) => {
    res.send("登录模块");
});

app.get('/register', (req, res) => {
    res.send("注册模块");
});

/*动态路由*/
app.get('/newsContent/:aid', (req, res) => {
    //获取动态路由的值
    console.log(req.params);
    let aid = req.params.aid;
    res.send("newsContent模块--" + aid);
});

//获取get传值
app.get('/product',function (req, res) {
    console.log(req.query);
    res.send('product' + 'aid=' + req.query.aid + 'cid=' + req.query.cid);
});

app.listen(3000, '127.0.0.1');
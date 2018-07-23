let ejs = require('ejs');
let express = require('express');

let app = express();
app.set('view engine', 'ejs');
app.get('/',function (req, res) {
    // res.send('ejs演示');
    res.render('index');
});

let arr = ['111', '222', '333'];
app.get('/news',function (req, res) {
    res.render('news',{
        list: arr
    });
});

app.use(express.static('public'));

app.listen(3000, '127.0.0.1');
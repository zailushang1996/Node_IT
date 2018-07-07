var sd = require('silly-datetime');
var http = require('http');

var app = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html;charset=UTF-8"});
    res.write("你好nodejs");

    res.write(sd.format(new Date()));

    res.write(sd.fromNow(+new Date() - 2000));

    res.end();
});
app.listen(3000, '127.0.0.1');
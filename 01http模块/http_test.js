var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    res.write("Hello World!");
    res.end("\n结束");
}).listen(8001);
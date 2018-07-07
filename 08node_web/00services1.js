var http = require('http');

var fs = require('fs');

http.createServer((req, res) => {
    let pathName = req.url;
    if (pathName == "/") {
        pathName = "/index.html";
    }
    if (pathName != "/favicon.ico") {
        console.log(pathName);
        fs.readFile('static/' + pathName, (err, data) =>{
            if (err) {
                console.log('404');
            } else {
                res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
                res.write(data);
                res.end();
            }
        })
    }
}).listen(8888);
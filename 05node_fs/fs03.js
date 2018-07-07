var fs = require('fs');

var data = "我是数据库查询出来的数据，需要写入到文件中";

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data, 'UTF-8');
writerStream.end();

writerStream.on('finish',function () {
    console.log("写入完成");
});

writerStream.on('error',function (err) {
    console.log(err.stack);
});

console.log("program end!");


var fs = require('fs');

fs.stat('t.txt',(err,stats)=>{
    if (err) {
        console.log(err);
        return false;
    }

    console.log(stats.isFile());

    console.log(stats.isDirectory());
});

fs.mkdir('css',function (err) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('success');
});


fs.writeFile('t.txt','你好nodejs',function (err) {
    if (err) {
        console.log(err);
    }
    console.log("写入成功");
});

fs.appendFile('t1.txt','新加的内容',(err)=>{
    if (err) {
        console.log(err);
        return false;
    }
    console.log("write success");
});

fs.readFile('t.txt',(err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data+"end");
});
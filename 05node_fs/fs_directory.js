//获取html目录下的 文件夹

var fs = require('fs');

fs.readdir('html',(err,files)=>{
    if (err) {
        console.log(err);
        return false;
    } else {//判断是目录还是文件
        console.log(files);

        for (var i = 0; i < files.length; i++) {
            fs.stat(files[i],function (err, stats) {
                console.log(files[i]);
            })
        }
    }
});
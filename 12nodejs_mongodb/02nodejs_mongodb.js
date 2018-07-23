/**
 1.npm install mongodb --save-dev / cnpm install mongodb --save-dev

 2.var MongoClient = require('mongodb').MongoClient;

 var url = 'mongodb://localhost:27017/test';   连接数据库的地址

 3.连接数据库

 MongoClient.connect(url, function(err, db) {

});

 4.实现增加修改删除

 MongoClient.connect(url, function(err, db) {

    db.collection('user').insertOne({'name':'zhangsan'},function(error,data){




    })

});





 */
var http=require('http');

var ejs=require('ejs');

var MongoClient = require('mongodb').MongoClient;

var DBurl = 'mongodb://localhost:27017/itying';



var app=require('./model/express-route.js');

http.createServer(app).listen(3000);

app.get('/',function(req,res){



    MongoClient.connect(DBurl,function (err, db) {
        if (err) {
            console.log("连接失败");
            return;
        }
        var list = [];
        var result = db.collection('student').find({});

        result.each(function (error, doc) {
            if (error) {
                console.log(error);
            } else {
                if (doc != null) {
                    list.push(doc);
                } else {
                    console.log(list);
                }
            }
        });

    })


    //var msg='这是数据库的数据'
    //
    //ejs.renderFile('views/index.ejs',{msg:msg},function(err,data){
    //
    //    res.send(data);
    //})
})

app.get('/add',function(req,res){

    MongoClient.connect(DBurl,function(err,db){

        if(err){

            console.log('连接数据库失败');
            return;
        }

        db.collection('student').insertOne({"name":'lisi',"age":40},function(error,data){

            if(error){
                console.log('增加数据失败');
                return;
            }
            console.log(data);

            res.send('增加数据成功');

            db.close();

        })


    })
})



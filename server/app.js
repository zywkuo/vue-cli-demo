
var express = require('express');  
var app = express();

//连接mogodb数据库
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


//解决跨域  
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});  

//登陆部分
app.get('/pushData.json',function(req,res){
    //get获取前台传过来的参数    req.query
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var whereStr = {"name":req.query.name};
        db.db("blog").collection("blog").find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            if(result.length == 0){
                res.send({
                    code:'3',
                    data:'用户名不存在，请注册!'
                });
            }else{
                if(req.query.passWord == result[0].passWord){
                    res.send({
                        code:'1',
                        data:'登陆成功!'
                    });
                }else{
                    res.send({
                        code:'2',
                        data:'密码输入有误，请重新输入!'
                    });
                }
            }
        });
    });
});


//注册部分
//post请求中间件
app.use((req,res,next) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end',()=>{
        req.body = data;
        next();
    })
});
app.post('/creatData.json', function (req, res) {
    //post获取前台传过来的参数   req.body   
    var creatData = JSON.parse(req.body)
    MongoClient.connect(url, function(err, db) {//查询数据库判断用户名是否存在
        if (err) res.send(err);
        var whereStr = {"name": creatData.name };  // 查询条件
        db.db("blog").collection("blog").find(whereStr).toArray(function(err, result) {
            if (err) res.send(err);
            if(result.length == 0) {//判断用户名是否存在不存在插入
                MongoClient.connect(url, function(err, db) {
                    if (err) res.send(err);
                    db.db("blog").collection("blog").insertOne(creatData, function(err, resu) {
                        if (err) res.send(err);
                        res.send({
                            code:'1',
                            data:'用户创建成功!'
                        });
                    });
                });
            }else{//存在返回存在
                res.send({
                    code:'2',
                    data:'用户名已存在!'
                });
            }
        });
    });
});



//启动服务，监听一个端口，不要和页面一样的端口  
app.listen(9999);


// //创建数据库文件夹
// MongoClient.connect(url + 'blog', function(err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   db.close();
// });

//插入数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var myobj = { id:"02", name: "周艳伟"};
//     db.db("blog").collection("blog").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });

//删除数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var whereStr = {"id":'02'};  // 查询条件
//     db.db("blog").collection("blog").deleteOne(whereStr, function(err, obj) {
//         if (err) throw err;
//         console.log("文档删除成功");
//         db.close();
//     });
// });

//修改数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var whereStr = {"id":'01'};  // 查询条件
//     var updateStr = {$set: { "name" : "zhouyanwei" }};
//     db.db("blog").collection("blog").updateOne(whereStr, updateStr, function(err, res) {
//         if (err) throw err;
//         console.log("文档更新成功");
//         db.close();
//     });
// });

//查询数据--集合中所有数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     db.db("blog").collection("blog").find({}).toArray(function(err, result) { // 返回集合中所有数据
//         if (err) throw err;
//         console.log(result);
//         userData = result;
//     });
// });

//查询数据--集合中指定条件数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var whereStr = {"name":'菜鸟教程'};  // 查询条件
//     dbo.collection("site").find(whereStr).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });














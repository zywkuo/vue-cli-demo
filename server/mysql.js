
var express = require('express');
var app = express();

//连接mysql数据库
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '19940512',
  port     : '3306',
  database : 'vueData'
});


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
// connection.connect();


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

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

//查训数据
app.post('/selectData.json', function (req, res) {
    var  sql = 'SELECT * FROM test';
    connection.query(sql,function (err, result) {
        if (err) res.send(err);
        // console.log(result)
        res.send({
            code:'200',
            data:result,
            explain:'查询成功'
        });
    });
});

// 插入数据
app.post('/insertData.json', function (req, res) {
    //post获取前台传过来的参数   req.body
    var  addSql = 'INSERT INTO test(id,name,age,sex,birthday) VALUES(?,?,?,?,?)';
    var  addSqlParams = JSON.parse(req.body);
    connection.query(addSql,addSqlParams,function (err, result) {
        if (err) res.send(err);
        res.send({
            code:'200',
            data:result,
            explain:'插入成功'
        });
    });
});

//修改数据
app.post('/editData.json', function (req, res) {
    var modSql = 'UPDATE test SET id = ?,name = ?,age = ?,sex = ?,birthday = ? WHERE Id = ?';
    var modSqlParams = JSON.parse(req.body);
    connection.query(modSql,modSqlParams,function (err, result) {
        if (err) res.send(err);
        res.send({
            code:'200',
            data:result,
            explain:'修改成功'
        });
    });
});

//删除数据
app.post('/deleteData.json', function (req, res) {
    //post获取前台传过来的参数   req.body
    var delSql = 'DELETE FROM test where id=' + JSON.parse(req.body);
    connection.query(delSql,function (err, result) {
        if (err) res.send(err);
        console.log(result)
        res.send({
            code:'200',
            data:result,
            explain:'删除成功'
        });
    });
});






//启动服务，监听一个端口，不要和页面一样的端口
app.listen(6688);



// connection.end();

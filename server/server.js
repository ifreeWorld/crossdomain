// var http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('end');
// }).listen(3001, '127.0.0.1');

var express = require('express');
var app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var questions = [
    {
        data: 213,
        num: 444,
        age: 12
    },
    {
        data: 456,
        num: 678,
        age: 13
    }];

//写个接口123
app.get('/crossdomain', function (req, res) {
    // res.status(200),
    //     res.json(questions)
    console.log("server accept: ", req.query.name, req.query.id)
    var data = "{" + "name:'" + req.query.name + " - server 3001 process'," + "id:'" + req.query.id + " - server 3001 process'" + "}";
    var callback = req.query.callback;  //获得请求端回调函数
    var jsonp = callback + '(' + data + ')';
    console.log(jsonp);
    res.send(jsonp);
    res.end();
});

app.get('/test', function (req, res) {
  console.log("server accept: ", req.query.inputText)
  var result = 'result' + req.query.inputText
  res.send(result);
  res.end();
})

//配置服务端口
var server = app.listen(9002, function () {

    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})
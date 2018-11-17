var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// use可以拦截get,post等其他全部请求
// 所有请求都会拦截
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

// 静态文件目录
app.use(express.static(__dirname + '/public'));


app.get('/api/taskList', require('./db/api/taskList.js'))

var server = app.listen(4000, function () {
    var port = server.address().port;

    console.log('Example app listening at http://localhost:%s', port);
});
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root', //账号
    password: 'kirito', //密码
    database: 'task', //库名
    multipleStatements: true //允许执行多条语句
});
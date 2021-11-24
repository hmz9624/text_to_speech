var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static(path.join(__dirname, '../public')));


app.get('/public/css/bootstrap.css', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/css/bootstrap.css'));
})


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/index2.html'));
    console.log("index gönderildi")
})





app.listen(80, function () {
    console.log("app listening");
})
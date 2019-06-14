var express = require('express');
var app = express();

app.use('/static',express.static('static'));
app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html");
});
 
var server = app.listen(process.env.ADMIN_PORT,process.env.ADMIN_IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
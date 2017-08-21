var express = require('express');

var port = 2019;

var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
})

app.listen(port, function(){
  console.log(`listening on ${port}...`);
})

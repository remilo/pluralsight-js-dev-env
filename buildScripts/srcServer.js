//will configure a webserver to serve the files from our directory
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', function(req, res){
  //send the index html as a response
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  } else {
    open('http://localhost:' + port, 'firefox');
  }
});



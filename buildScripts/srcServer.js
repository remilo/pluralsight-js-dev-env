//will configure a webserver to serve the files from our directory
import express from 'express';
import path from 'path';
import open from'open';

const port = 3000;
const app = express();

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



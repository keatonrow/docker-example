var express = require('express');
var app = express();
var package = require('./package.json');

app.get('/', function(req, res) {
  res.send('Hello World from' + package.name + '@' + package.version);
});

var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});

var path = require('path');
var express = require('express');
var server = express();
var port = process.env.PORT || 3000;

server.use(express.static(path.join(__dirname, '../client')));
server.use(express.static(path.join(__dirname, '/../', 'node_modules')));

server.get('/api', function(req, res) {
  res.send({content: 'suh dude'});
});

server.listen(port, function() {
  console.log('listening on port ' + port);
});

module.exports = server;

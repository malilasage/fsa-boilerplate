var express = require('express');
var server = express();
var port = process.env.PORT || 3000;

server.use(express.static('public'));

server.get('/api', function(req, res) {
  res.send('routes working');
});

server.listen(port, function() {
  console.log('listening on port ' + port);
});

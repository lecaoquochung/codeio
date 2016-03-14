var http = require('http');
var static = require('node-static');
var file = new static.Server();

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(9000, '192.168.11.200');

console.log('Server running at http://192.168.11.200');

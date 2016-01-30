var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
}).listen(1337, '192.168.11.200');

console.log('Server running at http://192.168.11.200:1337/');

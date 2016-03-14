var http = require('http');
var static = require('node-static');
var file = new static.Server();
var handleReq = function(req, res) {
 file.serve(req, res);
};
var svr = http.createServer(handleReq);
svr.listen(9000, '192.168.11.200');

console.log('Server running at http://192.168.11.200');

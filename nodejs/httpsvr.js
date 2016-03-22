var http = require('http');
var url = require('url');
var static = require('node-static');
var file = new static.Server();
var handleReq = function(req, res) {
    file.serve(req, res);
};

http.createServer(function (req, res) {
    if (url.parse(req.url).pathname == '/admin/index.php') {
        admin_index.serve(req, res);
    } else {
        file.serve(req, res);
    }
}).listen(9000, '192.168.11.200');

console.log('Server running at http://192.168.11.200');




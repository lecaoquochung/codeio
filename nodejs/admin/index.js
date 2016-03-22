export.serve = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('admin/index.js');
};

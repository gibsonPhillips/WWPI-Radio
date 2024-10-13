var http = require('http');
var dt = require('./nodeModule');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('hello node');
}).listen(8080);
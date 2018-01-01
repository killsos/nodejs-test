const express = require('express');
const expressStatic = require('express-static');
const server = express();

server.use(expressStatic('./www'));

server.use('/', function(req, res, next) {
    res.send('interface');
    res.end();
});
server.listen(8080);
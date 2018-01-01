const http = require('http');
const fs = require('fs');
const urlLib = require('url');

const server = http.createServer(function(request, response) {
    console.log(urlLib.parse(request.url, true));
    fs.readFile('index.html', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        response.write(data);
        response.end();
    })
});

server.listen(8080);
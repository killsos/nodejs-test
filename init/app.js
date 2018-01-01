const http = require('http');
const fs = require('fs');
const urlLib = require('url');

const server = http.createServer(function(request, response) {
    var url = urlLib.parse(request.url, true);
    console.log(url.path)
    if (url.path === '/form.html') {
        fs.readFile('form.html', (error, data) => {
            if (error) {
                console.log(error);
                return;
            }
            response.write(data);
            response.end();
        })
    } else {
        var arr = [];
        request.on('data',function(data) {
            arr.push(data);
        });
        request.on('end',function() {
            console.log(arr.join('').toString());
        });
        response.write('Hello world');
        response.end();
    }
});

server.listen(8080);
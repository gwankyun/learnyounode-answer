var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
    var urlJson = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var iso = urlJson.query.iso;
    if (urlJson.pathname === '/api/parsetime') {
        var date = new Date(iso);
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var result = {
            'hour': hour,
            'minute': minute,
            'second': second
        };
        res.write(JSON.stringify(result));
        res.end;
    } else if (urlJson.pathname === '/api/unixtime') {
        var date = new Date(iso);
        var time = date.getTime();
        var result = {
            'unixtime': time
        };
        res.write(JSON.stringify(result));
        res.end;
    } else {
        console.error('error url');
    }
});

server.listen(port);
var http = require('http');

var url = process.argv[2];
http.get(url, function (response) {
    response.on('error', function (err) {
        console.error(err);
    });
    response.on('end', function (end) {
        console.error(end);
    });
    response.on('data', function (data) {
        console.log(data.toString());
    });
});
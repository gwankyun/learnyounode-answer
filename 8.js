var http = require('http');

var url = process.argv[2];
http.get(url, function (response) {
    response.setEncoding('utf8');
    var contents = '';
    response.on('error', console.error);
    response.on('data', function (data) {
        contents += data;
    });
    response.on('end', function (end) {
        console.log(contents.length);
        console.log(contents);
    });
}).on('error', function (error) {
    console.log(error.message);
});
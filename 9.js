var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var num = 0;
var result = new Array(3);

function check() {
    if (num === 3) {
        result.forEach(function (value) {
            console.log(value);
        });
    }
}

//for (var i = 2; i <= 4; i++) {
//    (function (i) {
//    })(i);
//}
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    var contents = '';
    response.on('error', console.error);
    response.on('data', function (data) {
        contents += data;
    });
    response.on('end', function (end) {
        //console.log(contents);
        num++;
        //console.log(num);
        result[0] = contents;
        check();
    });
}).on('error', function (error) {
    console.log(error.message);
});

http.get(url2, function (response) {
    response.setEncoding('utf8');
    var contents = '';
    response.on('error', console.error);
    response.on('data', function (data) {
        contents += data;
    });
    response.on('end', function (end) {
        //console.log(contents);
        num++;
        //console.log(num);
        result[1] = contents;
        check();
    });
}).on('error', function (error) {
    console.log(error.message);
});

http.get(url3, function (response) {
    response.setEncoding('utf8');
    var contents = '';
    response.on('error', console.error);
    response.on('data', function (data) {
        contents += data;
    });
    response.on('end', function (end) {
        //console.log(contents);
        num++;
        //console.log(num);
        result[2] = contents;
        check();
    });
}).on('error', function (error) {
    console.log(error.message);
});

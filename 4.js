var fs = require('fs')

var path;
var argv = process.argv;
if (argv.length < 3) {
    throw "no file";
} else {
    path = argv[2];
}

fs.readFile(path, function (err, data) {
    if (err) {
        throw err;
    } else {
        console.log(data.toString().split('\n').length - 1);
    }
});
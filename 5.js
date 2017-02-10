var fs = require('fs');
var path = require('path');

var filePath;
var type;
var argv = process.argv;
if (argv.length < 4) {
    throw "no file";
} else {
    filePath = argv[2];
    type = argv[3];
    //console.log(type);
}

fs.readdir(filePath, function (err, files) {
    if (err) {
        throw err;
    } else {
        files.filter(function (value) {
            var ext = path.extname(value).split('.')[1];
            //console.log(ext);
            return ext === type;
        }).forEach(function (value) {
            console.log(value);
            //console.log('\n');
        });
    }
});
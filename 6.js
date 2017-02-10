var module6 = require('./module6');

var filePath = process.argv[2];
var extname = process.argv[3];

module6(filePath, extname, function (err, data) {
    if (err) {
        console.error(err);
    } else {
        data.forEach(function (value) {
            console.log(value);
        });
    }
});
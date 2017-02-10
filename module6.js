var fs = require('fs');
var path = require('path');

module.exports = function (filePath, ext, callback) {
    var ext = '.' + ext;
    fs.readdir(filePath, function (err, files) {
        if (err) {
            callback(err, null);
        } else {
            return callback(null, files.filter(function (value) {
                return path.extname(value) === ext;
            }));
        }
    });
};
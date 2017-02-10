var fs = require('fs')

var path = process.argv[2]

//console.log(path);
//console.log(fs.readFileSync(path).toString());
//console.log(fs.readFileSync(path).toString());

console.log(fs.readFileSync(path).toString().split('\n').length - 1);
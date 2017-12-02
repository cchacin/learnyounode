var fs = require('fs');

var myfile = fs.readFileSync(process.argv[2]).toString().split('\n');

console.log(myfile.length - 1);
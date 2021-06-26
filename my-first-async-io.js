var fs = require('fs');
var file = process.argv[2];

function count(pFile, callback) {
  fs.readFile(pFile, "utf8", function(err, data){
     callback(data.split("\n").length-1);
  });
}

count(file, console.log);
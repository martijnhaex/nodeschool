var fs = require('fs');

function countWord(word) {
     var file = fs.readFileSync(process.argv[2]).toString();
     return file.match(new RegExp(word, "g") || []).length;
}

console.log(countWord('\n'));

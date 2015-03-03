var fs = require('fs');

function countWord(word) {
     fs.readFile(process.argv[2], 'utf8', function(err, data) {
          if (err) {
               throw err;
          } 
          console.log((data.match(new RegExp(word, 'g')) || []).length);
     });
}

countWord('\n');

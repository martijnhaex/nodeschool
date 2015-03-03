var fs = require('fs'),
    path = require('path');

function listFilesOfDirectory(directory, extension) {
     fs.readdir(directory, function(err, files) {
          if (err) {
               throw err;
          }

          files.forEach(function(file) {
               if (path.extname(file) === '.' + extension) {
                    console.log(file);
               }  
          })
     });
}

listFilesOfDirectory(process.argv[2], process.argv[3]);

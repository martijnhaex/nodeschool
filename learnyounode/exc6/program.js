var fileListing = require('./fileListing')

function printFiles(err, files) {
     if (err) {
          console.error('There was an unexpected error!', err);
     }

     files.forEach(function(file) {
          console.log(file);
     });
}

fileListing(process.argv[2], process.argv[3], printFiles);

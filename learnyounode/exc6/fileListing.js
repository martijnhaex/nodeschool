module.exports = listFiles

var fs = require('fs'),
    path = require('path');

function listFiles(directory, extension, handler) {
     fs.readdir(directory, function(err, files) {
          if (err) {
              return  handler(err);
          }

	  files = files.filter(function(file) {
               return path.extname(file) === '.' + extension;
          });
          return handler(null, files);
      });
}

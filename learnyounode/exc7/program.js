var http = require('http');

function printHTTPResponse(url) {
     http.get(url, function(response) {
	  response.setEncoding('utf8');
          response.on('data', function(data) {
               console.log(data);
          });
     });
}

printHTTPResponse(process.argv[2])

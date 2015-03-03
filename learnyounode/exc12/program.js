var map = require('through2-map'),
    http = require('http'),
    server = http.createServer(function(request, response){
	          if (request.method === 'POST') {
                       response.writeHead(200, { 'Content-Type': 'text/plain' });
		       request.pipe(map(function(data) {
		           return data.toString().toUpperCase()
                       })).pipe(response);
                  }
             });

server.listen(process.argv[2]);

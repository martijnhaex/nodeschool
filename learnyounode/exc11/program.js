var fs = require('fs'),
    http = require('http'),
    server = http.createServer(function(request, response){
		  response.writeHead(200, { 'content-type': 'text/plain' });
	          fs.createReadStream(process.argv[3]).pipe(response);
             });

server.listen(process.argv[2]);

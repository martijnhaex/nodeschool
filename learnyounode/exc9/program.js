var http = require('http'),
    bl = require('bl'),
    responses = [],
    responsesCount = 0;

function printHTTPResponses() {
     for (var i = 0; i < 3; i++) {
          printHTTPResponse(process.argv[2 + i], i);
     }
}

function printHTTPResponse(url, call) {
     http.get(url, function(response){
          response.pipe(bl(function(err, data){
               if (err) {
                    console.error(err);
               }

               responses[call] = data.toString();
	       responsesCount++;
               printResponses();
          }));
     });
}

function printResponses() {
   if (responsesCount === 3) {
         responses.forEach(function(response){
              console.log(response);
         });
   }
}

printHTTPResponses();

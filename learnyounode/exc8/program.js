var http = require('http'),
    bl = require('bl');

function printHTTPResponse(url) {
     http.get(url, function(response){
          response.pipe(bl(function(err, data){
               if (err) {
                    console.error(err);
               }

               data = data.toString();
               console.log(data.length);
               console.log(data);
           }));
     });
}

printHTTPResponse(process.argv[2]);

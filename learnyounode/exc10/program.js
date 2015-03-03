var net = require('net'),
    strftime = require('strftime'),
    server = net.createServer(function(socket) {
                 socket.end(formatDate());
             });

function formatDate() {
     return strftime('%F %H:%M', new Date()) + '\n';
}

server.listen(Number(process.argv[2]));

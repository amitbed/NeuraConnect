/**
 * Created by Amit on 19/04/2016.
 */
var http = require('http');
var port = 8888;

function onRequest(request, response){
    console.log("Neura has made a request: " + request.url);
    if (request.method == 'POST'){
        response.writeHead(200, {"Content-Type": "application/json"});
        console.log(request.name);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");
console.log("Listening to port " + port);

/**
 * Created by Amit on 19/04/2016.
 */
var https = require('https');
var port = process.env.PORT || 443;;

function onRequest(request, response){
    console.log("Neura has made a request: " + request.url);
    if (request.method == 'POST'){
        response.writeHead(200, {"Content-Type": "application/json"});
        console.log(request.name);
    }
}

https.createServer(onRequest).listen(port);
console.log("Server is now running...");
console.log("Listening to port " + port);

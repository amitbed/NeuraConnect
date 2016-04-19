/**
 * Created by Amit on 19/04/2016.
 */

var PORT = 80;
var https = require('https');

function onRequest(request, response){
    console.log("Neura has made a request: " + request.url);
    if (request.method == 'POST'){
        response.writeHead(200, {"Content-Type": "application/json"});
        console.log(request.name);
    }
}

https.createServer(onRequest).listen(PORT);

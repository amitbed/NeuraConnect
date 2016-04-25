/**
 * Created by Amit on 19/04/2016.
 */
var https = require('https');
var port = process.env.PORT || 443;;

function onRequest(request, response){
    console.log("Neura has made a request: " + request.url);
    if (request.method == 'POST'){
        response.writeHead(200, {"version" : "HTTP/1.1" ,
                                 "Content-Type": "application/json"});
        //write in a web browser
        response.write("Name: " + JSON.stringify(request.name));
        response.write("Timestamp: " + JSON.stringify(request.timestamp));
        response.write("Metadata: " + JSON.stringify(request.metadata));
        response.write("State: " + JSON.stringify(request.state));
        response.write("Identifier of subscription: " + JSON.stringify(request.identifier));

        console.log("Name: " + JSON.stringify(request.name));
        console.log("Timestamp: " + JSON.stringify(request.timestamp));
        console.log("Metadata: " + JSON.stringify(request.metadata));
        console.log("State: " + JSON.stringify(request.state));
        console.log("Identifier of subscription: " + JSON.stringify(request.identifier));

        response.end();
    }
}

https.createServer(onRequest).listen(port);
console.log("Server is now running...");
console.log("Listening to port " + port);

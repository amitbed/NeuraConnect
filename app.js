/**
 * Created by Amit on 19/04/2016.
 */
var https = require('https');
var port = process.env.PORT || 443;;
var name = 0 ;
var ts = 0 ;
var metadata = 0 ;
var state = 0;
var id = 0;

function onRequest(request, response){
    console.log("Neura has made a request: " + request.url);
    if (request.method == 'POST'){
        response.writeHead(200, {"version" : "HTTP/1.1" ,
                                 "Content-Type": "application/json"});

        name = JSON.stringify(request.name);
        ts = JSON.stringify(request.timestamp);
        metadata = JSON.stringify(request.metadata);
        state = JSON.stringify(request.state);
        id = JSON.stringify(request.identifier);

        console.log("Name: " + JSON.stringify(request.name));
        console.log("Timestamp: " + JSON.stringify(request.timestamp));
        console.log("Metadata: " + JSON.stringify(request.metadata));
        console.log("State: " + JSON.stringify(request.state));
        console.log("Identifier of subscription: " + JSON.stringify(request.identifier));

        response.end();
    }else{
        //write in a web browser
        response.write("Name: " + name);
        response.write("Timestamp: " + ts);
        response.write("Metadata: " + metadata);
        response.write("State: " + state);
        response.write("Identifier of subscription: " + id);
    }
}

https.createServer(onRequest).listen(port);
console.log("Server is now running...");
console.log("Listening to port " + port);

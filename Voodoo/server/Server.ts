import * as Http from "http";
import * as Url from "url";
import * as Database from "./Database";

console.log("Server starting");

let port: number = Number(process.env.PORT);
if (!port)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);


function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    let query: Flüche = <Flüche>Url.parse(_request.url, true).query;
    let command: string = query["command"];

    switch (command) {
        case "insert":
            let opfer: OpferDaten = {
                name: query["name"]
            };
            Database.insert(opfer);
            respond(_response, "storing data");
            break;
        case "refresh":
            Database.findAll(findCallback);
            break;
        default:
            respond(_response, "unknown command: " + command);
            break;
    }

    function findCallback(json: string): void {
        respond(_response, json);
    }
}

function respond(_response: Http.ServerResponse, _text: string): void {
    _response.setHeader("Access-Control-Allow-Origin", "https://katharinaschmitt.github.io");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.end();
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //sagt, dass mit Node gearbeitet wird
var L05_Server;
(function (L05_Server) {
    console.log("Starting server"); //"Starting server" wird in der Konsole angezeigt
    let port = Number(process.env.PORT); // erstellt Variable "port" vom Typ number; "port" wird alles aus PORT (Umgebungsvariable) übergeben
    if (!port) //wenn port unwahr ist
        port = 8100; //port gleich 8100
    let server = Http.createServer(); //erstellt Variable "server" vom Typ Http.Server, erstellt in dieser ein Serverinstanz
    server.addListener("request", handleRequest); //fügt Eventlistener "request" auf server hinzu; wenn Anfrage an server eingeht, wird handleRequest aufgerufen
    server.addListener("listening", handleListen); //fügt Eventlistener "listening" auf server hinzu, handleListen wird ausgeführt
    server.listen(port); // sagt der Serverinstanz auf "port" zu hören
    function handleListen() {
        console.log("Listening"); //"Listening" wird in der Konsole angezeigt
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //"I hear voices!" wird in der Konsole angezeigt
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); //fügt zu _response header hinzu
        _response.setHeader("Access-Control-Allow-Origin", "*"); //fügt zu header von _response hinzu, dass die Ressource für andere Codes zugänglich wird 
        _response.write(_request.url); //in _response wird die url von _request geschrieben
        _response.end(); //_response wird geschlossen; singnalisiert dem  Server, _response an den Client zu schicken
    }
})(L05_Server || (L05_Server = {}));
//# sourceMappingURL=Server.js.map
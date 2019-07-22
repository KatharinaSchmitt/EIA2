var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2-katharina-schmitt.herokuapp.com/";
    function highscoreAbschicken() {
        let query = "command=insert";
        query += "&name=" + Abschlussaufgabe.nameSpieler;
        query += "&highscore=" + Abschlussaufgabe.punkteanzahl;
        sendRequest(query, handleInsertResponse);
        console.log(query);
    }
    Abschlussaufgabe.highscoreAbschicken = highscoreAbschicken;
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=DBClient.js.map
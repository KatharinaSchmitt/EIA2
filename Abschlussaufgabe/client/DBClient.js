var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2-katharina-schmitt.herokuapp.com/";
    function highscoreAbschicken() {
        let query = "command=insert";
        query += "&name=" + Abschlussaufgabe.nameSpieler;
        query += "&highscore=" + Abschlussaufgabe.punkteanzahl;
        sendRequest(query, handleInsertResponse);
    }
    Abschlussaufgabe.highscoreAbschicken = highscoreAbschicken;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    Abschlussaufgabe.refresh = refresh;
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
            let alleSpielerArray = JSON.parse(xhr.response);
            for (let i = 0; i < alleSpielerArray.length; i++) {
                alleSpielerArray.sort(scoreVergleichen);
            }
            for (let i = 0; i < 5; i++) {
                let div = document.createElement("div");
                div.innerHTML = `<p>${alleSpielerArray[i].name + ": " + alleSpielerArray[i].highscore}</p>`;
                document.getElementById("Bestenliste").appendChild(div);
            }
        }
    }
    function scoreVergleichen(a, b) {
        let scoreA = a.highscore;
        let scoreB = b.highscore;
        if (scoreA < scoreB) {
            return 1;
        }
        if (scoreA > scoreB) {
            return -1;
        }
        return 0;
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=DBClient.js.map
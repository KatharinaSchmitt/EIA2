var Interface;
(function (Interface) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2-katharina-schmitt.herokuapp.com/";
    function fluchAbschicken() {
        let query = "command=insert";
        query += "&name=" + Interface.nameOpfer;
        sendRequest(query, handleInsertResponse);
    }
    Interface.fluchAbschicken = fluchAbschicken;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    Interface.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }
    /*function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }*/
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let alleOpferArray = JSON.parse(xhr.response);
            /*for (let i: number = 0; i < alleOpferArray.length; i++) {
                alleOpferArray.sort(scoreVergleichen);
            }*/
            for (let i = 0; i < 5; i++) {
                let div = document.createElement("div");
                div.innerHTML = `<p>${alleOpferArray[i].name}</p>`;
                document.getElementById("Bestenliste").appendChild(div);
                console.log(div);
            }
        }
    }
    /*function scoreVergleichen(a: OpferDaten, b: OpferDaten): number {
        let scoreA: number = a.nadeln;
        let scoreB: number = b.nadeln;
        if (scoreA < scoreB) {
            return 1;
        }
        if (scoreA > scoreB) {
            return -1;
        }
        return 0;
    }*/
})(Interface || (Interface = {}));
//# sourceMappingURL=DBClient.js.map
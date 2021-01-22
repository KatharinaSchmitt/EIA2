/*namespace Abschlussaufgabe {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eia2-katharina-schmitt.herokuapp.com/";

    export function highscoreAbschicken(): void {
        let query: string = "command=insert";
        query += "&name=" + nameSpieler;
        query += "&highscore=" + punkteanzahl;
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    
    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let alleSpielerArray: SpielerDaten[] = JSON.parse(xhr.response);
            for (let i: number = 0; i < alleSpielerArray.length; i++) {
                alleSpielerArray.sort(scoreVergleichen);
            }
            for (let i: number = 0; i < 5; i++) {
                let div: HTMLDivElement = document.createElement("div");
                div.innerHTML = `<p>${alleSpielerArray[i].name + ": " + alleSpielerArray[i].highscore}</p>`;
                document.getElementById("Bestenliste").appendChild(div);
            }
        }
    }

    function scoreVergleichen(a: SpielerDaten, b: SpielerDaten): number {
        let scoreA: number = a.highscore;
        let scoreB: number = b.highscore;
        if (scoreA < scoreB) {
            return 1;
        }
        if (scoreA > scoreB) {
            return -1;
        }
        return 0;
    }
}/* 
//# sourceMappingURL=DBClient.js.map
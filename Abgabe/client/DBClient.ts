namespace Voodoo {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eia2-katharina-schmitt.herokuapp.com/";

    export function fluchAbschicken(): void {
        let query: string = "command=insert";
        query += "&name=" + nameOpfer;
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
            let alleOpferArray: OpferDaten[] = JSON.parse(xhr.response);
            /*for (let i: number = 0; i < alleOpferArray.length; i++) {
                alleOpferArray.sort(scoreVergleichen);
            }*/
            for (let i: number = 0; i < 5; i++) {
                let div: HTMLDivElement = document.createElement("div");
                div.innerHTML = `<p>${alleOpferArray[i].name}</p>`;
                document.getElementById("Bestenliste").appendChild(div);
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
}
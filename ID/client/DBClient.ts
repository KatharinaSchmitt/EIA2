namespace ID {
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
        console.log(_query);
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let video = document.createElement('video');
            video.setAttribute('src', './animation/voodoo.mp4');
            document.getElementById("alles").appendChild(video);
            video.play();
            if (video.ended == true) {
                document.getElementById("alles").innerHTML = "";
                let h1: HTMLDivElement = document.createElement("div");
                h1.innerHTML = `<img src="./animation/Opfer2.png">`;
                document.getElementById("alles").appendChild(h1);

                let alleOpferArray: OpferDaten[] = JSON.parse(xhr.response);
                for (let i: number = 0; i < 10; i++) {

                    let div: HTMLDivElement = document.createElement("div");
                    div.innerHTML = `<p id="${alleOpferArray[i].name}">${alleOpferArray[i].name}</p>`;
                    document.getElementById("alles").appendChild(div);
                    console.log(div);
                    console.log("angekommen");
                }
            }
        }
    }
}
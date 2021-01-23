var ID;
(function (ID) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2-katharina-schmitt.herokuapp.com/";
    function fluchAbschicken() {
        let query = "command=insert";
        query += "&name=" + ID.nameOpfer;
        sendRequest(query, handleInsertResponse);
    }
    ID.fluchAbschicken = fluchAbschicken;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    ID.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
        console.log(_query);
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let video = document.createElement('video');
            video.setAttribute('src', './animation/voodoo.mp4');
            document.getElementById("alles").appendChild(video);
            video.play();
            if (video.ended == true) {
                document.getElementById("alles").innerHTML = "";
                let h1 = document.createElement("div");
                h1.innerHTML = `<img src="./animation/Opfer2.png">`;
                document.getElementById("alles").appendChild(h1);
                let alleOpferArray = JSON.parse(xhr.response);
                for (let i = 0; i < 10; i++) {
                    let div = document.createElement("div");
                    div.innerHTML = `<p id="${alleOpferArray[i].name}">${alleOpferArray[i].name}</p>`;
                    document.getElementById("alles").appendChild(div);
                    console.log(div);
                    console.log("angekommen");
                }
            }
        }
    }
})(ID || (ID = {}));
//# sourceMappingURL=DBClient.js.map
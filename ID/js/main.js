var ID;
(function (ID) {
    document.addEventListener('DOMContentLoaded', startbildschirm);
    function startbildschirm(_event) {
        document.getElementById("später").hidden = true;
        document.getElementById("starte").addEventListener("click", starten);
    }
    //Website aufbauen, wenn neu aufgerufen wird
    function starten() {
        document.getElementById("später").hidden = false;
        document.getElementById("anleitung").hidden = true;
        document.getElementById("Tastatur").addEventListener("click", tasteAnzeigen);
        document.addEventListener("keydown", stechen);
        document.getElementById("abschicken").addEventListener("click", laden);
    }
    //Eingabe via Buchstaben auf Bildschirm
    function tasteAnzeigen(_event) {
        if (_event.target.className == "key") {
            document.getElementById("name").innerHTML += _event.target.innerHTML;
        }
        if (_event.target.id == "löschen") {
            console.log("Klappt");
            document.getElementById("name").innerHTML = "";
        }
        if (_event.target.id == "space") {
            console.log("Klappt2");
            document.getElementById("name").innerHTML += " ";
        }
    }
    // Schmerzlaute bei Stechen der Puppe
    function stechen(_event) {
        if (_event.keyCode == 39) { //rechte taste = Arm
            let sound = new Audio();
            sound.src = "./sounds/arm.mp3";
            sound.play();
        }
        if (_event.keyCode == 38) { //oben taste = Bein
            let sound = new Audio();
            sound.src = "./sounds/bein.mp3";
            sound.play();
        }
        if (_event.keyCode == 37) { //linke taste = Bauch
            let sound = new Audio();
            sound.src = "./sounds/bauch.mp3";
            sound.play();
        }
        if (_event.keyCode == 40) { //unten taste = Herz
            let sound = new Audio();
            sound.src = "./sounds/herz.mp3";
            sound.play();
        }
        if (_event.keyCode == 49) { //1 = Hals
            let sound = new Audio();
            sound.src = "./sounds/hals.mp3";
            sound.play();
        }
        if (_event.keyCode == 50) { //2 = Mund
            let sound = new Audio();
            sound.src = "./sounds/mund.mp3";
            sound.play();
        }
        if (_event.keyCode == 51) { //3 = Auge
            let sound = new Audio();
            sound.src = "./sounds/auge.mp3";
            sound.play();
        }
        if (_event.keyCode == 52) { //4 = Herz
            let sound = new Audio();
            sound.src = "./sounds/kopf.mp3";
            sound.play();
        }
    }
    //Ladeanimation
    function laden() {
        ID.nameOpfer = document.getElementById("name").innerHTML;
        if (ID.nameOpfer != "") {
            console.log("laden");
            document.getElementById("Tastatur").innerHTML = "";
            document.getElementById("abschicken").innerHTML = "";
            let video = document.createElement('video');
            video.setAttribute('src', './animation/rauch.mp4');
            video.setAttribute('width', '70%');
            video.setAttribute('margin', '0px');
            document.getElementById("animation").appendChild(video);
            video.play();
            abschicken();
        }
        if (ID.nameOpfer == "") {
            alert("Stop");
            startbildschirm;
        }
    }
    //Fluch mit Button abschicken
    function abschicken() {
        ID.nameOpfer = document.getElementById("name").innerHTML;
        console.log(ID.nameOpfer);
        ID.fluchAbschicken();
        console.log("Abgeschickt");
        ID.refresh();
        setTimeout(neuLaden, 6000);
    }
    function neuLaden() {
        window.location.reload();
    }
})(ID || (ID = {}));
//# sourceMappingURL=main.js.map
namespace Interface {
    document.addEventListener('DOMContentLoaded', startbildschirm);
    export let nameOpfer: string;
    export let nadeln: number = 0;
    var keyElem = document.querySelector(".key");



    //Website aufbauen, wenn neu aufgerufen wird
    function startbildschirm(_event:Event): void {
        //document.getElementById("reihe1").addEventListener("click", tasteAnzeigen);
        document.addEventListener("keydown", stechen);
        document.getElementById("abschicken").addEventListener("click", abschicken);
        keyElem.addEventListener("click", logEvent);
    }
    function logEvent ():void {
        document.getElementById("name").innerHTML += keyElem.innerHTML;
    }

    //Eingabe via Buchstaben auf Bildschirm
    /*function tasteAnzeigen(): void {
        let q = document.getElementById("Q");
        document.getElementById("name").innerHTML += q.innerHTML;
        let w = document.getElementById("W");
        document.getElementById("name").innerHTML += w.innerHTML;
    }*/

    // Schmerzlaute bei Stechen der Puppe
    function stechen(_event: KeyboardEvent): void {
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

    //Fluch mit Button abschicken
    function abschicken(): void {
        //window.clearTimeout(timeout);
        nameOpfer = "Hans";
        console.log (nameOpfer);
        fluchAbschicken();
        console.log("Abgeschickt");
        laden();
    }

    //Ladeanimation
    function laden ():void {
        console.log("laden");
        /*let div: HTMLDivElement = document.createElement("div");
        div.innerHTML = `
        <img src="./animation/rauch.gif" alt="rauch" width: 50%>
        `;
        document.getElementById("animation").appendChild(div);*/
        //window.location.reload();
    }

}
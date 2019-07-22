/*
Aufgabe: <Abschlussaufgabe>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <27.07.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Abschlussaufgabe {
    document.addEventListener("DOMContentLoaded", startbildschirm);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let objekteArray: AlleObjekte[] = [];
    export let nameSpieler: string;
    let timeout: number;
    let fps: number = 30;
    let imageData: ImageData;
    let spielerfisch: Spielerfisch;
    let blub: Blubber;
    let ersterFisch: KleinerFisch;
    let mittelFisch: MittelFisch;
    let zweiterFisch: GroßerFisch;
    export let punkteanzahl: number = 0; //Highscore
    let schwimmG: number = 10; // Schwimmgeschwindigkeit des Spielerfisches 

    function startbildschirm(): void {
        document.getElementById("Start").addEventListener("click", init);
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        hintergrund();
    }

    function init(_event: Event): void {
        document.addEventListener("keydown", steuerungFisch);

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 50; i++) {
            blub = new Blubber(Math.random());
            objekteArray.push(blub);
        }
        for (let i: number = 0; i < 3; i++) {
            falleFutterParty();
        }
        for (let i: number = 0; i < 3; i++) {
            falleFutterQualle();
        }
        for (let i: number = 0; i < 8; i++) {
            erstelleErsterFisch();
        }
        for (let i: number = 0; i < 5; i++) {
            erstelleMittelFisch();
        }
        for (let i: number = 0; i < 2; i++) {
            erstelleZweiterFisch();
        }
        for (let i: number = 0; i < 2; i++) {
            erstellePartyFisch();
        }
        erstelleBöserFisch();
        erstelleQualle();
        spielerfisch = new Spielerfisch();
        objekteArray.push(spielerfisch);
        update();
    }

    function zuGross(): void { //wenn Spielerfisch zu groß, dann sterben
        if (spielerfisch.w > 30) {
            gameOver();
        }
    }

    function gameOver(): void { //Name eingeben um an Server zu schicken
        window.clearTimeout(timeout);
        nameSpieler = prompt("Dein Highscore:" + punkteanzahl + "Bitte gib deinen Namen ein:");
        if (nameSpieler != null) {
            highscoreAbschicken();
        }
    }



    function falleFutterParty(): void {
        let futterParty: FutterParty = new FutterParty();
        objekteArray.push(futterParty);
    }
    function falleFutterQualle(): void {
        let futterQualle: FutterQualle = new FutterQualle();
        objekteArray.push(futterQualle);
    }
    function erstelleQualle(): void {
        let qualle: Qualle = new Qualle();
        objekteArray.push(qualle);
    }
    function erstelleBöserFisch(): void {
        let böserFisch: BoeserFisch = new BoeserFisch();
        objekteArray.push(böserFisch);
    }

    function erstelleErsterFisch(): void {
        ersterFisch = new KleinerFisch();
        objekteArray.push(ersterFisch);
    }
    function erstelleMittelFisch(): void {
        mittelFisch = new MittelFisch();
        objekteArray.push(mittelFisch);
    }
    function erstelleZweiterFisch(): void {
        zweiterFisch = new GroßerFisch();
        objekteArray.push(zweiterFisch);
    }
    function erstellePartyFisch(): void {
        let partyFisch: PartyFisch = new PartyFisch();
        objekteArray.push(partyFisch);
    }

    function setTimeout(): void {
        timeout = window.setTimeout(update, 1000 / fps);
    }

    function update(): void {
        setTimeout();
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);
        fressen();
        typAendern();
        zuGross();
        for (let i: number = 0; i < objekteArray.length; i++) {
            objekteArray[i].update();
        }
    }

    function typAendern(): void { //typ des Spielerfisches ändern, um größere Fische essen zu können + Schwimmgeschwindigkeit ändern
        if (punkteanzahl <= 200) {
            spielerfisch.typ = 1;
            schwimmG = 10;
            spielerfisch.f = "aqua";
        }
        else if (punkteanzahl > 200 && punkteanzahl <= 900) {
            spielerfisch.typ = 2;
            schwimmG = 5;
            spielerfisch.f = "Aquamarine";
        }
        else if (punkteanzahl > 900) {
            spielerfisch.typ = 3;
            schwimmG = 3;
            spielerfisch.f = "MediumSeaGreen"
        }
    }

    function punktezahl(): void { //Highscore anzeigen
        document.getElementById("Punktezahl").innerHTML = "";
        let div: HTMLDivElement = document.createElement("div");
        div.innerHTML = `<p>${punkteanzahl}</p>`;
        document.getElementById("Punktezahl").appendChild(div);
        document.getElementById("Größe").innerHTML = "";
        let div2: HTMLDivElement = document.createElement("div");
        div2.innerHTML = `<p>${spielerfisch.w}</p>`;
        document.getElementById("Größe").appendChild(div2);
    }

    //fressen + wachsen des Spielerfisches + Punkteanzahl erhöhen + gefressene Fische wieder neu erstellen
    function fressen(): void {
        for (let i: number = 0; i < objekteArray.length; i++) {
            let distanz: number = Math.hypot(objekteArray[i].x - spielerfisch.x, objekteArray[i].y - spielerfisch.y);
            if ((objekteArray[i].typ == spielerfisch.typ || objekteArray[i].typ < spielerfisch.typ) && objekteArray[i] != spielerfisch && objekteArray[i].typ != 0) {

                //normale Fische
                if (distanz < 20 && objekteArray[i].typ == 1) { //kleinerFisch gefressen
                    objekteArray.splice(i, 1);
                    spielerfisch.w += 0.2;
                    punkteanzahl += 10;
                    punktezahl();
                    erstelleErsterFisch(); //gefressener Fisch neu 

                }
                else if (distanz < 20 && objekteArray[i].typ == 2) {
                    objekteArray.splice(i, 1);
                    spielerfisch.w += 0.5;
                    punkteanzahl += 50;
                    punktezahl();
                    erstelleMittelFisch(); //gefressener Fisch neu
                }
                else if (distanz < 20 && objekteArray[i].typ == 3) { //großerFisch gefressen
                    objekteArray.splice(i, 1);
                    spielerfisch.w += 1;
                    punkteanzahl += 100;
                    punktezahl();
                    erstelleZweiterFisch(); //gefressener Fisch neu
                }

                //besondere Fische
                else if (distanz < 30 && objekteArray[i].typ == -1) { //Qualle berühren verlangsamt den Fisch            
                    spielerfisch.f = "grey";
                    schwimmG = 1;
                    spielerfisch.typ = 1;
                }
                else if (distanz < 20 && objekteArray[i].typ == -3) { //Partyfisch vertauscht die Navigation
                    spielerfisch.f = "lime";
                }
                else if (distanz < 20 && objekteArray[i].typ == -2) { //Böser Fisch tötet
                    gameOver();
                }

                //Futter
                else if (distanz < 20 && objekteArray[i].typ == -4) {
                    objekteArray.splice(i, 1);
                    falleFutterParty();
                    if (schwimmG == 1) {
                        spielerfisch.f = "grey";
                    }
                    else if (schwimmG > 1) {
                        if (punkteanzahl <= 200) {
                            spielerfisch.typ = 1;
                            schwimmG = 10;
                            spielerfisch.f = "aqua";
                        }
                        else if (punkteanzahl > 200 && punkteanzahl <= 900) {
                            spielerfisch.typ = 2;
                            schwimmG = 5;
                            spielerfisch.f = "Aquamarine";
                        }
                        else if (punkteanzahl > 900) {
                            spielerfisch.typ = 3;
                            schwimmG = 3;
                            spielerfisch.f = "MediumSeaGreen"
                        }
                    }
                }
                else if (distanz < 20 && objekteArray[i].typ == -5) {
                    objekteArray.splice(i, 1);
                    spielerfisch.f = "aqua";
                    falleFutterQualle();
                    if (punkteanzahl <= 200) {
                        spielerfisch.typ = 1;
                        schwimmG = 10;
                        spielerfisch.f = "aqua";
                    }
                    else if (punkteanzahl > 200 && punkteanzahl <= 900) {
                        spielerfisch.typ = 2;
                        schwimmG = 5;
                        spielerfisch.f = "Aquamarine";
                    }
                    else if (punkteanzahl > 900) {
                        spielerfisch.typ = 3;
                        schwimmG = 3;
                        spielerfisch.f = "MediumSeaGreen"
                    }
                }

            }
            else if (objekteArray[i].typ > spielerfisch.typ) { //gefressen werden (Gameover)
                if (distanz < 20) {
                    objekteArray.splice(0, 1);
                    gameOver();

                }
            }
        }
    }

    //Fisch steuern
    function steuerungFisch(_event: KeyboardEvent): void {
        if (spielerfisch.f != "lime") {
            if (_event.keyCode == 39) { //rechts
                spielerfisch.x += schwimmG;
                if (spielerfisch.x > 800) {
                    spielerfisch.x = 0;
                }
            }
            if (_event.keyCode == 37) { //links
                spielerfisch.x -= schwimmG;
                if (spielerfisch.x < 0) {
                    spielerfisch.x = 800;
                }
            }
            if (_event.keyCode == 38) { //hoch
                spielerfisch.y -= schwimmG;
                if (spielerfisch.y < 0) {
                    spielerfisch.y = 600;
                }
            }
            if (_event.keyCode == 40) { //runter
                spielerfisch.y += schwimmG;
                if (spielerfisch.y > 600) {
                    spielerfisch.y = 0;
                }
            }
        }
        else if (spielerfisch.f == "lime") {
            if (_event.keyCode == 37) { //rechts, schwimmt aber links
                spielerfisch.x += schwimmG;
                if (spielerfisch.x < 0) {
                    spielerfisch.x = 800;
                }
            }
            if (_event.keyCode == 39) { //links, schwimmt aber rechts
                spielerfisch.x -= schwimmG;
                if (spielerfisch.x > 800) {
                    spielerfisch.x = 0;
                }
            }
            if (_event.keyCode == 40) { //hoch, schwimmt aber runter
                spielerfisch.y -= schwimmG;
                if (spielerfisch.y > 600) {
                    spielerfisch.y = 0;
                }
            }
            if (_event.keyCode == 38) { //runter, schwimmt aber hoch
                spielerfisch.y += schwimmG;
                if (spielerfisch.y < 0) {
                    spielerfisch.y = 600;
                }
            }
        }
    }

    function hintergrund(): void {
        let wasser: Path2D = new Path2D();
        wasser.rect(0, 0, 800, 600);
        crc.fillStyle = "Mediumblue";
        crc.fill(wasser);
        crc.stroke(wasser);

        let sand: Path2D = new Path2D();
        sand.moveTo(0, 500);
        sand.bezierCurveTo(270, 450, 580, 550, 800, 500);
        sand.lineTo(800, 600);
        sand.lineTo(0, 600);
        sand.closePath();
        crc.fillStyle = "SandyBrown";
        crc.fill(sand);
        crc.stroke(sand);

        let seestern: Path2D = new Path2D();
        seestern.moveTo(650, 550);
        seestern.lineTo(700, 540);
        seestern.lineTo(710, 500);
        seestern.lineTo(720, 540);
        seestern.lineTo(770, 550);
        seestern.lineTo(730, 560);
        seestern.lineTo(750, 590);
        seestern.lineTo(710, 570);
        seestern.lineTo(670, 590);
        seestern.lineTo(690, 560);
        seestern.lineTo(650, 550);
        crc.fillStyle = "fuchsia";
        crc.fill(seestern);
        crc.stroke(seestern);
        let auge: Path2D = new Path2D();
        auge.arc(720, 550, 2, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(auge);
        crc.stroke(auge);
        let auge2: Path2D = new Path2D();
        auge2.arc(700, 550, 2, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(auge2);
        crc.stroke(auge2);
        let mund: Path2D = new Path2D();
        mund.moveTo(720, 560);
        mund.bezierCurveTo(720, 570, 700, 570, 700, 560);
        crc.stroke(mund);

        stein(280, 580);
        stein(750, 520);
        stein(450, 550);
        stein(85, 585);
        stein(200, 540);
        function stein(_x: number, _y: number) {
            let stein: Path2D = new Path2D();
            stein.moveTo(_x, _y);
            stein.quadraticCurveTo(_x + 10, _y - 40, _x + 50, _y);
            stein.quadraticCurveTo(_x - 10, _y + 10, _x, _y);
            crc.fillStyle = "Sienna";
            crc.fill(stein);
            crc.stroke(stein);
        }
        stein2(90, 520);
        stein2(390, 590);
        stein2(550, 590);
        stein2(280, 520);
        stein2(520, 520);
        function stein2(_x: number, _y: number) {
            let stein: Path2D = new Path2D();
            stein.moveTo(_x, _y);
            stein.bezierCurveTo(_x + 10, _y - 20, _x + 30, _y - 40, _x + 50, _y);
            stein.bezierCurveTo(_x + 30, _y + 5, _x + 20, _y + 5, _x, _y);
            crc.fillStyle = "Maroon";
            crc.fill(stein);
            crc.stroke(stein);
        }
        gras3(10, 510);
        gras2(30, 530);
        gras(45, 520);
        gras2(75, 530);
        gras3(25, 540);
        gras(10, 550);
        gras3(40, 560);
        gras2(60, 540);
        gras(50, 590);
        gras(90, 540);
        gras2(100, 560);
        gras3(80, 570);
        gras(12, 590);
        gras3(28, 585);
        gras2(67, 598);
        function gras(_x: number, _y: number): void {
            let gras: Path2D = new Path2D();
            gras.moveTo(_x, _y);
            gras.quadraticCurveTo(_x + 10, _y - 70, _x - 5, _y - 90);
            gras.quadraticCurveTo(_x - 20, _y - 70, _x - 10, _y);
            crc.fillStyle = "MediumSpringGreen";
            crc.fill(gras);
            crc.stroke(gras);
        }
        function gras2(_x: number, _y: number): void {
            let gras: Path2D = new Path2D();
            gras.moveTo(_x, _y);
            gras.quadraticCurveTo(_x + 10, _y - 70, _x - 5, _y - 90);
            gras.quadraticCurveTo(_x - 20, _y - 70, _x - 10, _y);
            crc.fillStyle = "DarkSeaGreen";
            crc.fill(gras);
            crc.stroke(gras);
        }
        function gras3(_x: number, _y: number): void {
            let gras: Path2D = new Path2D();
            gras.moveTo(_x, _y);
            gras.quadraticCurveTo(_x + 10, _y - 70, _x - 5, _y - 90);
            gras.quadraticCurveTo(_x - 20, _y - 70, _x - 10, _y);
            crc.fillStyle = "LightGreen";
            crc.fill(gras);
            crc.stroke(gras);
        }
        let koralle: Path2D = new Path2D();
        koralle.moveTo(400, 550);
        koralle.quadraticCurveTo(360, 460, 390, 490);
        koralle.quadraticCurveTo(410, 510, 410, 430);
        koralle.quadraticCurveTo(410, 380, 430, 460);
        koralle.quadraticCurveTo(430, 480, 450, 460);
        koralle.bezierCurveTo(460, 440, 470, 450, 450, 480);
        koralle.quadraticCurveTo(410, 530, 420, 550);
        koralle.bezierCurveTo(410, 555, 405, 545, 400, 550);
        crc.fillStyle = "gold";
        crc.fill(koralle);
        crc.stroke(koralle);
    }
    export function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
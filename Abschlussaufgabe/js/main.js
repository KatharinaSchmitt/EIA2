/*
Aufgabe: <Abschlussaufgabe>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <27.07.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    document.addEventListener("DOMContentLoaded", startbildschirm);
    Abschlussaufgabe.objekteArray = [];
    let timeout;
    let fps = 30;
    let imageData;
    let spielerfisch;
    let blub;
    let ersterFisch;
    let mittelFisch;
    let zweiterFisch;
    Abschlussaufgabe.punkteanzahl = 0; //Highscore
    let schwimmG = 10; // Schwimmgeschwindigkeit des Spielerfisches 
    function startbildschirm() {
        document.getElementById("Start").addEventListener("click", init);
        Abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc = Abschlussaufgabe.canvas.getContext("2d");
        hintergrund();
        Abschlussaufgabe.refresh();
    }
    function init(_event) {
        document.addEventListener("keydown", steuerungFisch);
        imageData = Abschlussaufgabe.crc.getImageData(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        for (let i = 0; i < 50; i++) {
            blub = new Abschlussaufgabe.Blubber(Math.random());
            Abschlussaufgabe.objekteArray.push(blub);
        }
        for (let i = 0; i < 3; i++) {
            falleFutterParty();
        }
        for (let i = 0; i < 3; i++) {
            falleFutterQualle();
        }
        for (let i = 0; i < 3; i++) {
            falleFutterKlein();
        }
        for (let i = 0; i < 8; i++) {
            erstelleErsterFisch();
        }
        for (let i = 0; i < 5; i++) {
            erstelleMittelFisch();
        }
        for (let i = 0; i < 2; i++) {
            erstelleZweiterFisch();
        }
        for (let i = 0; i < 2; i++) {
            erstellePartyFisch();
        }
        erstelleBöserFisch();
        erstelleQualle();
        spielerfisch = new Abschlussaufgabe.Spielerfisch();
        Abschlussaufgabe.objekteArray.push(spielerfisch);
        update();
    }
    function zuGross() {
        if (spielerfisch.w > 30) {
            gameOver();
        }
        if (spielerfisch.w < 5) {
            gameOver();
        }
    }
    function gameOver() {
        window.clearTimeout(timeout);
        Abschlussaufgabe.nameSpieler = prompt("Dein Highscore: " + Abschlussaufgabe.punkteanzahl, "Bitte gib deinen Namen ein");
        Abschlussaufgabe.highscoreAbschicken();
        alert("neues Spiel starten");
        window.location.reload();
    }
    function falleFutterKlein() {
        let futterKlein = new Abschlussaufgabe.FutterKlein();
        Abschlussaufgabe.objekteArray.push(futterKlein);
    }
    function falleFutterParty() {
        let futterParty = new Abschlussaufgabe.FutterParty();
        Abschlussaufgabe.objekteArray.push(futterParty);
    }
    function falleFutterQualle() {
        let futterQualle = new Abschlussaufgabe.FutterQualle();
        Abschlussaufgabe.objekteArray.push(futterQualle);
    }
    function erstelleQualle() {
        let qualle = new Abschlussaufgabe.Qualle();
        Abschlussaufgabe.objekteArray.push(qualle);
    }
    function erstelleBöserFisch() {
        let böserFisch = new Abschlussaufgabe.BoeserFisch();
        Abschlussaufgabe.objekteArray.push(böserFisch);
    }
    function erstelleErsterFisch() {
        ersterFisch = new Abschlussaufgabe.KleinerFisch();
        Abschlussaufgabe.objekteArray.push(ersterFisch);
    }
    function erstelleMittelFisch() {
        mittelFisch = new Abschlussaufgabe.MittelFisch();
        Abschlussaufgabe.objekteArray.push(mittelFisch);
    }
    function erstelleZweiterFisch() {
        zweiterFisch = new Abschlussaufgabe.GroßerFisch();
        Abschlussaufgabe.objekteArray.push(zweiterFisch);
    }
    function erstellePartyFisch() {
        let partyFisch = new Abschlussaufgabe.PartyFisch();
        Abschlussaufgabe.objekteArray.push(partyFisch);
    }
    function setTimeout() {
        timeout = window.setTimeout(update, 1000 / fps);
    }
    function update() {
        setTimeout();
        Abschlussaufgabe.crc.clearRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc.putImageData(imageData, 0, 0);
        fressen();
        typAendern();
        zuGross();
        for (let i = 0; i < Abschlussaufgabe.objekteArray.length; i++) {
            Abschlussaufgabe.objekteArray[i].update();
        }
    }
    function typAendern() {
        if (Abschlussaufgabe.punkteanzahl > 200 && Abschlussaufgabe.punkteanzahl <= 900) {
            spielerfisch.typ = 2;
            schwimmG = 5;
            spielerfisch.f = "Aquamarine";
        }
        else if (Abschlussaufgabe.punkteanzahl > 900) {
            spielerfisch.typ = 3;
            schwimmG = 3;
            spielerfisch.f = "MediumSeaGreen";
        }
    }
    function punktezahl() {
        document.getElementById("Punktezahl").innerHTML = "";
        let div = document.createElement("div");
        div.innerHTML = `<p>Highscore ${Abschlussaufgabe.punkteanzahl}</p>`;
        document.getElementById("Punktezahl").appendChild(div);
        document.getElementById("Größe").innerHTML = "";
        let div2 = document.createElement("div");
        let w = spielerfisch.w.toFixed(2);
        div2.innerHTML = `<p>Größe ${w}</p>`;
        document.getElementById("Größe").appendChild(div2);
    }
    //fressen + wachsen des Spielerfisches + Punkteanzahl erhöhen + gefressene Fische wieder neu erstellen
    function fressen() {
        for (let i = 0; i < Abschlussaufgabe.objekteArray.length; i++) {
            let distanz = Math.hypot(Abschlussaufgabe.objekteArray[i].x - spielerfisch.x, Abschlussaufgabe.objekteArray[i].y - spielerfisch.y);
            if ((Abschlussaufgabe.objekteArray[i].typ == spielerfisch.typ || Abschlussaufgabe.objekteArray[i].typ < spielerfisch.typ) && Abschlussaufgabe.objekteArray[i] != spielerfisch && Abschlussaufgabe.objekteArray[i].typ != 0) {
                //normale Fische
                if (distanz < 20 && Abschlussaufgabe.objekteArray[i].typ == 1) { //kleinerFisch gefressen
                    Abschlussaufgabe.objekteArray.splice(i, 1);
                    spielerfisch.w += 0.2;
                    Abschlussaufgabe.punkteanzahl += 10;
                    punktezahl();
                    erstelleErsterFisch(); //gefressener Fisch neu 
                }
                else if (distanz < 20 && Abschlussaufgabe.objekteArray[i].typ == 2) {
                    Abschlussaufgabe.objekteArray.splice(i, 1);
                    spielerfisch.w += 0.5;
                    Abschlussaufgabe.punkteanzahl += 50;
                    punktezahl();
                    erstelleMittelFisch(); //gefressener Fisch neu
                }
                else if (distanz < 20 && Abschlussaufgabe.objekteArray[i].typ == 3) { //großerFisch gefressen
                    Abschlussaufgabe.objekteArray.splice(i, 1);
                    spielerfisch.w += 1;
                    Abschlussaufgabe.punkteanzahl += 100;
                    punktezahl();
                    erstelleZweiterFisch(); //gefressener Fisch neu
                }
                //besondere Fische
                else if (distanz < 20 && Abschlussaufgabe.objekteArray[i].typ == -1) { //Qualle berühren verlangsamt den Fisch            
                    spielerfisch.f = "grey";
                    schwimmG = 1;
                    spielerfisch.typ = 1;
                }
                else if (distanz < 20 && Abschlussaufgabe.objekteArray[i].typ == -3) { //Partyfisch vertauscht die Navigation
                    spielerfisch.f = "lime";
                }
                else if (distanz < 20 && Abschlussaufgabe.objekteArray[i].typ == -2) { //Böser Fisch tötet
                    gameOver();
                }
                //Futter
                else if (distanz < 20 && Abschlussaufgabe.objekteArray[i].typ == -4) {
                    Abschlussaufgabe.objekteArray.splice(i, 1);
                    falleFutterParty();
                    if (schwimmG == 1) {
                        spielerfisch.f = "grey";
                    }
                    else if (schwimmG > 1) {
                        if (Abschlussaufgabe.punkteanzahl <= 200) {
                            spielerfisch.typ = 1;
                            schwimmG = 10;
                            spielerfisch.f = "aqua";
                        }
                        else if (Abschlussaufgabe.punkteanzahl > 200 && Abschlussaufgabe.punkteanzahl <= 900) {
                            spielerfisch.typ = 2;
                            schwimmG = 5;
                            spielerfisch.f = "Aquamarine";
                        }
                        else if (Abschlussaufgabe.punkteanzahl > 900) {
                            spielerfisch.typ = 3;
                            schwimmG = 3;
                            spielerfisch.f = "MediumSeaGreen";
                        }
                    }
                }
                else if (distanz < 20 && Abschlussaufgabe.objekteArray[i].typ == -5) {
                    Abschlussaufgabe.objekteArray.splice(i, 1);
                    spielerfisch.f = "aqua";
                    falleFutterQualle();
                    if (Abschlussaufgabe.punkteanzahl <= 200) {
                        spielerfisch.typ = 1;
                        schwimmG = 10;
                        spielerfisch.f = "aqua";
                    }
                    else if (Abschlussaufgabe.punkteanzahl > 200 && Abschlussaufgabe.punkteanzahl <= 900) {
                        spielerfisch.typ = 2;
                        schwimmG = 5;
                        spielerfisch.f = "Aquamarine";
                    }
                    else if (Abschlussaufgabe.punkteanzahl > 900) {
                        spielerfisch.typ = 3;
                        schwimmG = 3;
                        spielerfisch.f = "MediumSeaGreen";
                    }
                }
                else if (distanz < 20 && Abschlussaufgabe.objekteArray[i].typ == -6) {
                    spielerfisch.w = spielerfisch.w - 1;
                    Abschlussaufgabe.objekteArray.splice(i, 1);
                    falleFutterKlein();
                }
            }
            else if (Abschlussaufgabe.objekteArray[i].typ > spielerfisch.typ) { //gefressen werden (Gameover)
                if (distanz < 20) {
                    Abschlussaufgabe.objekteArray.splice(0, 1);
                    gameOver();
                }
            }
        }
    }
    //Fisch steuern
    function steuerungFisch(_event) {
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
    function hintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 800, 600);
        Abschlussaufgabe.crc.fillStyle = "Mediumblue";
        Abschlussaufgabe.crc.fill(wasser);
        Abschlussaufgabe.crc.stroke(wasser);
        let sand = new Path2D();
        sand.moveTo(0, 500);
        sand.bezierCurveTo(270, 450, 580, 550, 800, 500);
        sand.lineTo(800, 600);
        sand.lineTo(0, 600);
        sand.closePath();
        Abschlussaufgabe.crc.fillStyle = "SandyBrown";
        Abschlussaufgabe.crc.fill(sand);
        Abschlussaufgabe.crc.stroke(sand);
        let seestern = new Path2D();
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
        Abschlussaufgabe.crc.fillStyle = "fuchsia";
        Abschlussaufgabe.crc.fill(seestern);
        Abschlussaufgabe.crc.stroke(seestern);
        let auge = new Path2D();
        auge.arc(720, 550, 2, 0, 2 * Math.PI);
        Abschlussaufgabe.crc.fillStyle = "black";
        Abschlussaufgabe.crc.fill(auge);
        Abschlussaufgabe.crc.stroke(auge);
        let auge2 = new Path2D();
        auge2.arc(700, 550, 2, 0, 2 * Math.PI);
        Abschlussaufgabe.crc.fillStyle = "black";
        Abschlussaufgabe.crc.fill(auge2);
        Abschlussaufgabe.crc.stroke(auge2);
        let mund = new Path2D();
        mund.moveTo(720, 560);
        mund.bezierCurveTo(720, 570, 700, 570, 700, 560);
        Abschlussaufgabe.crc.stroke(mund);
        stein(280, 580);
        stein(750, 520);
        stein(450, 550);
        stein(85, 585);
        stein(200, 540);
        function stein(_x, _y) {
            let stein = new Path2D();
            stein.moveTo(_x, _y);
            stein.quadraticCurveTo(_x + 10, _y - 40, _x + 50, _y);
            stein.quadraticCurveTo(_x - 10, _y + 10, _x, _y);
            Abschlussaufgabe.crc.fillStyle = "Sienna";
            Abschlussaufgabe.crc.fill(stein);
            Abschlussaufgabe.crc.stroke(stein);
        }
        stein2(90, 520);
        stein2(390, 590);
        stein2(550, 590);
        stein2(280, 520);
        stein2(520, 520);
        function stein2(_x, _y) {
            let stein = new Path2D();
            stein.moveTo(_x, _y);
            stein.bezierCurveTo(_x + 10, _y - 20, _x + 30, _y - 40, _x + 50, _y);
            stein.bezierCurveTo(_x + 30, _y + 5, _x + 20, _y + 5, _x, _y);
            Abschlussaufgabe.crc.fillStyle = "Maroon";
            Abschlussaufgabe.crc.fill(stein);
            Abschlussaufgabe.crc.stroke(stein);
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
        function gras(_x, _y) {
            let gras = new Path2D();
            gras.moveTo(_x, _y);
            gras.quadraticCurveTo(_x + 10, _y - 70, _x - 5, _y - 90);
            gras.quadraticCurveTo(_x - 20, _y - 70, _x - 10, _y);
            Abschlussaufgabe.crc.fillStyle = "MediumSpringGreen";
            Abschlussaufgabe.crc.fill(gras);
            Abschlussaufgabe.crc.stroke(gras);
        }
        function gras2(_x, _y) {
            let gras = new Path2D();
            gras.moveTo(_x, _y);
            gras.quadraticCurveTo(_x + 10, _y - 70, _x - 5, _y - 90);
            gras.quadraticCurveTo(_x - 20, _y - 70, _x - 10, _y);
            Abschlussaufgabe.crc.fillStyle = "DarkSeaGreen";
            Abschlussaufgabe.crc.fill(gras);
            Abschlussaufgabe.crc.stroke(gras);
        }
        function gras3(_x, _y) {
            let gras = new Path2D();
            gras.moveTo(_x, _y);
            gras.quadraticCurveTo(_x + 10, _y - 70, _x - 5, _y - 90);
            gras.quadraticCurveTo(_x - 20, _y - 70, _x - 10, _y);
            Abschlussaufgabe.crc.fillStyle = "LightGreen";
            Abschlussaufgabe.crc.fill(gras);
            Abschlussaufgabe.crc.stroke(gras);
        }
        let koralle = new Path2D();
        koralle.moveTo(400, 550);
        koralle.quadraticCurveTo(360, 460, 390, 490);
        koralle.quadraticCurveTo(410, 510, 410, 430);
        koralle.quadraticCurveTo(410, 380, 430, 460);
        koralle.quadraticCurveTo(430, 480, 450, 460);
        koralle.bezierCurveTo(460, 440, 470, 450, 450, 480);
        koralle.quadraticCurveTo(410, 530, 420, 550);
        koralle.bezierCurveTo(410, 555, 405, 545, 400, 550);
        Abschlussaufgabe.crc.fillStyle = "gold";
        Abschlussaufgabe.crc.fill(koralle);
        Abschlussaufgabe.crc.stroke(koralle);
    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    Abschlussaufgabe.getRandomColor = getRandomColor;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map
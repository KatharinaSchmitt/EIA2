/*
Aufgabe: <Abschlussaufgabe>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <27.07.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    document.addEventListener("DOMContentLoaded", init);
    Abschlussaufgabe.objekteArray = [];
    let fps = 30;
    let imageData;
    function init() {
        Abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc = Abschlussaufgabe.canvas.getContext("2d");
        document.addEventListener("keydown", steuerungFisch);
        hintergrund();
        imageData = Abschlussaufgabe.crc.getImageData(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        for (let i = 0; i < 50; i++) {
            Abschlussaufgabe.blub = new Abschlussaufgabe.Blubber(Math.random());
            Abschlussaufgabe.objekteArray.push(Abschlussaufgabe.blub);
        }
        for (let i = 0; i < 5; i++) {
            let ersterFisch = new Abschlussaufgabe.KleinerFisch();
            Abschlussaufgabe.objekteArray.push(ersterFisch);
        }
        for (let i = 0; i < 1; i++) {
            let zweiterFisch = new Abschlussaufgabe.GroßerFisch();
            Abschlussaufgabe.objekteArray.push(zweiterFisch);
        }
        for (let i = 0; i < 2; i++) {
            let qualle = new Abschlussaufgabe.Qualle();
            Abschlussaufgabe.objekteArray.push(qualle);
        }
        Abschlussaufgabe.spielerfisch = new Abschlussaufgabe.Spielerfisch();
        Abschlussaufgabe.objekteArray.push(Abschlussaufgabe.spielerfisch);
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Abschlussaufgabe.crc.clearRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc.putImageData(imageData, 0, 0);
        fressen();
        for (let i = 0; i < Abschlussaufgabe.objekteArray.length; i++) {
            Abschlussaufgabe.objekteArray[i].update();
        }
    }
    function fressen() {
        for (let i = 0; i < Abschlussaufgabe.objekteArray.length; i++) {
            let distanz = Math.hypot(Abschlussaufgabe.objekteArray[i].x - Abschlussaufgabe.spielerfisch.x, Abschlussaufgabe.objekteArray[i].y - Abschlussaufgabe.spielerfisch.y);
            if ((Abschlussaufgabe.objekteArray[i].typ == Abschlussaufgabe.spielerfisch.typ || Abschlussaufgabe.objekteArray[i].typ < Abschlussaufgabe.spielerfisch.typ) && Abschlussaufgabe.objekteArray[i] != Abschlussaufgabe.spielerfisch && Abschlussaufgabe.objekteArray[i].typ != 0) {
                if (distanz < 20) {
                    Abschlussaufgabe.objekteArray.splice(i, 1);
                    if (Abschlussaufgabe.objekteArray[i].typ == 1) {
                        Abschlussaufgabe.spielerfisch.w += 1;
                    }
                    else if (Abschlussaufgabe.objekteArray[i].typ == 2) {
                        Abschlussaufgabe.spielerfisch.w += 2;
                    }
                }
            }
            else if (Abschlussaufgabe.objekteArray[i].typ > Abschlussaufgabe.spielerfisch.typ) {
                if (distanz < 20) {
                    Abschlussaufgabe.objekteArray.splice(0, 1);
                    alert("Game Over");
                }
            }
        }
    }
    //Fisch steuern
    function steuerungFisch(event) {
        if (event.keyCode == 39) { //rechts
            Abschlussaufgabe.spielerfisch.x += 5;
            if (Abschlussaufgabe.spielerfisch.x > 800) {
                Abschlussaufgabe.spielerfisch.x = 0;
            }
        }
        if (event.keyCode == 37) { //links
            Abschlussaufgabe.spielerfisch.x -= 5;
            if (Abschlussaufgabe.spielerfisch.x < 0) {
                Abschlussaufgabe.spielerfisch.x = 800;
            }
        }
        if (event.keyCode == 38) { //hoch
            Abschlussaufgabe.spielerfisch.y -= 5;
            if (Abschlussaufgabe.spielerfisch.y < 0) {
                Abschlussaufgabe.spielerfisch.y = 600;
            }
        }
        if (event.keyCode == 40) { //runter
            Abschlussaufgabe.spielerfisch.y += 5;
            if (Abschlussaufgabe.spielerfisch.y > 600) {
                Abschlussaufgabe.spielerfisch.y = 0;
            }
        }
    }
    function hintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 800, 600);
        Abschlussaufgabe.crc.fillStyle = "MediumBlue ";
        Abschlussaufgabe.crc.fill(wasser);
        Abschlussaufgabe.crc.stroke(wasser);
        let sand = new Path2D();
        sand.rect(0, 500, 800, 100);
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
        Abschlussaufgabe.crc.fillStyle = "DeepPink";
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
        for (let i = 0; i < 11; i++) {
            let x = 200 + Math.random() * 400;
            let y = 500 + Math.random() * 100;
            let stein = new Path2D();
            stein.moveTo(x, y);
            stein.quadraticCurveTo(x + 10, y - 40, x + 50, y);
            stein.quadraticCurveTo(x - 10, y + 10, x, y);
            Abschlussaufgabe.crc.fillStyle = "Sienna";
            Abschlussaufgabe.crc.fill(stein);
            Abschlussaufgabe.crc.stroke(stein);
        }
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * 200;
            let y = 500 + Math.random() * 100;
            let gras = new Path2D();
            gras.moveTo(x, y);
            gras.quadraticCurveTo(x + 10, y - 70, x - 5, y - 90);
            gras.quadraticCurveTo(x - 20, y - 70, x - 10, y);
            Abschlussaufgabe.crc.fillStyle = "MediumSpringGreen";
            Abschlussaufgabe.crc.fill(gras);
            Abschlussaufgabe.crc.stroke(gras);
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map
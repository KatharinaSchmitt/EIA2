/*
Aufgabe: <Aufgabe 11>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <16.06.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe11;
(function (Aufgabe11) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let kleinerFisch = [];
    let großerFisch = [];
    let qualle = [];
    let blubber = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc = canvas.getContext("2d");
        hintergrund();
        imageData = Aufgabe11.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 500;
            let dx = Math.random();
            let dy = Math.random() * -10;
            let blub;
            blub = new Aufgabe11.Blubber();
            blub.x = x;
            blub.y = y;
            blub.dx = dx;
            blub.dy = dy;
            blubber.push(blub);
            blub.draw();
        }
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 500;
            let dx = -5 + Math.random() * -5;
            let dy = 0;
            let ersterFisch;
            ersterFisch = new Aufgabe11.KleinerFisch();
            ersterFisch.x = x;
            ersterFisch.y = y;
            ersterFisch.dx = dx;
            ersterFisch.dy = dy;
            kleinerFisch.push(ersterFisch);
            ersterFisch.draw();
        }
        for (let i = 0; i < 1; i++) {
            let x = Math.random() * canvas.width;
            let y = 100 + Math.random() * 300;
            let dx = 3 + Math.random();
            let dy = 0;
            let zweiterFisch;
            zweiterFisch = new Aufgabe11.GroßerFisch();
            zweiterFisch.x = x;
            zweiterFisch.y = y;
            zweiterFisch.dx = dx;
            zweiterFisch.dy = dy;
            großerFisch.push(zweiterFisch);
            zweiterFisch.draw();
        }
        for (let i = 0; i < 2; i++) {
            let x = 100 + Math.random() * 600;
            let y = Math.random();
            let dx = 0;
            let dy = Math.random() * -7;
            let eineQualle;
            eineQualle = new Aufgabe11.Qualle();
            eineQualle.x = x;
            eineQualle.y = y;
            eineQualle.dx = dx;
            eineQualle.dy = dy;
            qualle.push(eineQualle);
            eineQualle.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe11.crc.clearRect(0, 0, canvas.width, canvas.height);
        Aufgabe11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < blubber.length; i++) {
            blubber[i].update();
        }
        for (let i = 0; i < kleinerFisch.length; i++) {
            kleinerFisch[i].update();
        }
        for (let i = 0; i < großerFisch.length; i++) {
            großerFisch[i].update();
        }
        for (let i = 0; i < qualle.length; i++) {
            qualle[i].update();
        }
    }
    function hintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 800, 600);
        Aufgabe11.crc.fillStyle = "MediumBlue ";
        Aufgabe11.crc.fill(wasser);
        Aufgabe11.crc.stroke(wasser);
        let sand = new Path2D();
        sand.rect(0, 500, 800, 100);
        Aufgabe11.crc.fillStyle = "SandyBrown";
        Aufgabe11.crc.fill(sand);
        Aufgabe11.crc.stroke(sand);
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
        Aufgabe11.crc.fillStyle = "DeepPink";
        Aufgabe11.crc.fill(seestern);
        Aufgabe11.crc.stroke(seestern);
        let auge = new Path2D();
        auge.arc(720, 550, 2, 0, 2 * Math.PI);
        Aufgabe11.crc.fillStyle = "black";
        Aufgabe11.crc.fill(auge);
        Aufgabe11.crc.stroke(auge);
        let auge2 = new Path2D();
        auge2.arc(700, 550, 2, 0, 2 * Math.PI);
        Aufgabe11.crc.fillStyle = "black";
        Aufgabe11.crc.fill(auge2);
        Aufgabe11.crc.stroke(auge2);
        let mund = new Path2D();
        mund.moveTo(720, 560);
        mund.bezierCurveTo(720, 570, 700, 570, 700, 560);
        Aufgabe11.crc.stroke(mund);
        for (let i = 0; i < 11; i++) {
            let x = 200 + Math.random() * 400;
            let y = 500 + Math.random() * 100;
            let stein = new Path2D();
            stein.moveTo(x, y);
            stein.quadraticCurveTo(x + 10, y - 40, x + 50, y);
            stein.quadraticCurveTo(x - 10, y + 10, x, y);
            Aufgabe11.crc.fillStyle = "Sienna";
            Aufgabe11.crc.fill(stein);
            Aufgabe11.crc.stroke(stein);
        }
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * 200;
            let y = 500 + Math.random() * 100;
            let gras = new Path2D();
            gras.moveTo(x, y);
            gras.quadraticCurveTo(x + 10, y - 70, x - 5, y - 90);
            gras.quadraticCurveTo(x - 20, y - 70, x - 10, y);
            Aufgabe11.crc.fillStyle = "MediumSpringGreen";
            Aufgabe11.crc.fill(gras);
            Aufgabe11.crc.stroke(gras);
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=main.js.map
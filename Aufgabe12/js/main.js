/*
Aufgabe: <Aufgabe 12>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <30.06.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe12;
(function (Aufgabe12) {
    document.addEventListener("DOMContentLoaded", init);
    Aufgabe12.BewegteObjekteArray = [];
    let fps = 30;
    let imageData;
    function init() {
        Aufgabe12.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe12.crc = Aufgabe12.canvas.getContext("2d");
        hintergrund();
        Aufgabe12.canvas.addEventListener("click", futterFallen);
        imageData = Aufgabe12.crc.getImageData(0, 0, Aufgabe12.canvas.width, Aufgabe12.canvas.height);
        for (let i = 0; i < 50; i++) {
            let blub = new Aufgabe12.BewegteObjekte(Math.random());
            Aufgabe12.BewegteObjekteArray.push(blub);
        }
        for (let i = 0; i < 10; i++) {
            let ersterFisch = new Aufgabe12.KleinerFisch();
            Aufgabe12.BewegteObjekteArray.push(ersterFisch);
        }
        for (let i = 0; i < 3; i++) {
            let zweiterFisch = new Aufgabe12.GroßerFisch();
            Aufgabe12.BewegteObjekteArray.push(zweiterFisch);
        }
        for (let i = 0; i < 2; i++) {
            let qualle = new Aufgabe12.Qualle();
            Aufgabe12.BewegteObjekteArray.push(qualle);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe12.crc.clearRect(0, 0, Aufgabe12.canvas.width, Aufgabe12.canvas.height);
        Aufgabe12.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < Aufgabe12.BewegteObjekteArray.length; i++) {
            Aufgabe12.BewegteObjekteArray[i].update();
        }
    }
    function futterFallen(_event) {
        let futterX = _event.clientX;
        let futterY = _event.clientY;
        for (let i = 0; i < 3; i++) {
            let futter = new Aufgabe12.Futter(futterX, futterY);
            Aufgabe12.BewegteObjekteArray.push(futter);
        }
    }
    function hintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 800, 600);
        Aufgabe12.crc.fillStyle = "MediumBlue ";
        Aufgabe12.crc.fill(wasser);
        Aufgabe12.crc.stroke(wasser);
        let sand = new Path2D();
        sand.rect(0, 500, 800, 100);
        Aufgabe12.crc.fillStyle = "SandyBrown";
        Aufgabe12.crc.fill(sand);
        Aufgabe12.crc.stroke(sand);
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
        Aufgabe12.crc.fillStyle = "DeepPink";
        Aufgabe12.crc.fill(seestern);
        Aufgabe12.crc.stroke(seestern);
        let auge = new Path2D();
        auge.arc(720, 550, 2, 0, 2 * Math.PI);
        Aufgabe12.crc.fillStyle = "black";
        Aufgabe12.crc.fill(auge);
        Aufgabe12.crc.stroke(auge);
        let auge2 = new Path2D();
        auge2.arc(700, 550, 2, 0, 2 * Math.PI);
        Aufgabe12.crc.fillStyle = "black";
        Aufgabe12.crc.fill(auge2);
        Aufgabe12.crc.stroke(auge2);
        let mund = new Path2D();
        mund.moveTo(720, 560);
        mund.bezierCurveTo(720, 570, 700, 570, 700, 560);
        Aufgabe12.crc.stroke(mund);
        for (let i = 0; i < 11; i++) {
            let x = 200 + Math.random() * 400;
            let y = 500 + Math.random() * 100;
            let stein = new Path2D();
            stein.moveTo(x, y);
            stein.quadraticCurveTo(x + 10, y - 40, x + 50, y);
            stein.quadraticCurveTo(x - 10, y + 10, x, y);
            Aufgabe12.crc.fillStyle = "Sienna";
            Aufgabe12.crc.fill(stein);
            Aufgabe12.crc.stroke(stein);
        }
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * 200;
            let y = 500 + Math.random() * 100;
            let gras = new Path2D();
            gras.moveTo(x, y);
            gras.quadraticCurveTo(x + 10, y - 70, x - 5, y - 90);
            gras.quadraticCurveTo(x - 20, y - 70, x - 10, y);
            Aufgabe12.crc.fillStyle = "MediumSpringGreen";
            Aufgabe12.crc.fill(gras);
            Aufgabe12.crc.stroke(gras);
        }
    }
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=main.js.map
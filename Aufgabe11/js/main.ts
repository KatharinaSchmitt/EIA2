/*
Aufgabe: <Aufgabe 11>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <16.06.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe11 {
    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let kleinerFisch: KleinerFisch[] = [];
    let großerFisch: GroßerFisch[] = [];
    let qualle: Qualle[] = [];
    let blubber: Blubber[] = [];
    let fps: number = 30;
    let imageData: ImageData;


    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        hintergrund();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 50; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * 500;
            let dx: number = Math.random();
            let dy: number = Math.random() * - 10;
            let blub: Blubber;
            blub = new Blubber();
            blub.x = x;
            blub.y = y;
            blub.dx = dx;
            blub.dy = dy;
            blubber.push(blub);
            blub.draw();
        }
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * 500;
            let dx: number = -5 + Math.random() * -5;
            let dy: number = 0;
            let ersterFisch: KleinerFisch;
            ersterFisch = new KleinerFisch();
            ersterFisch.x = x;
            ersterFisch.y = y;
            ersterFisch.dx = dx;
            ersterFisch.dy = dy;
            kleinerFisch.push(ersterFisch);
            ersterFisch.draw();
        }
        for (let i: number = 0; i < 1; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = 100 + Math.random() * 300;
            let dx: number = 3 + Math.random();
            let dy: number = 0;
            let zweiterFisch: GroßerFisch;
            zweiterFisch = new GroßerFisch();
            zweiterFisch.x = x;
            zweiterFisch.y = y;
            zweiterFisch.dx = dx;
            zweiterFisch.dy = dy;
            großerFisch.push(zweiterFisch);
            zweiterFisch.draw();
        }
        for (let i: number = 0; i < 2; i++) {
            let x: number = 100 + Math.random() * 600;
            let y: number = Math.random();
            let dx: number = 0;
            let dy: number = Math.random() * - 7;
            let eineQualle: Qualle;
            eineQualle = new Qualle();
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
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);
        for (let i: number = 0; i < blubber.length; i++) {
            blubber[i].update();
        }
        for (let i: number = 0; i < kleinerFisch.length; i++) {
            kleinerFisch[i].update();
        }
        for (let i: number = 0; i < großerFisch.length; i++) {
            großerFisch[i].update();
        }
        for (let i: number = 0; i < qualle.length; i++) {
            qualle[i].update();
        }
    }


    function hintergrund() {
        let wasser: Path2D = new Path2D();
        wasser.rect(0, 0, 800, 600);
        crc.fillStyle = "MediumBlue ";
        crc.fill(wasser);
        crc.stroke(wasser);

        let sand: Path2D = new Path2D();
        sand.rect(0, 500, 800, 100);
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
        crc.fillStyle = "DeepPink";
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

        for (let i: number = 0; i < 11; i++) {
            let x: number = 200 + Math.random() * 400;
            let y: number = 500 + Math.random() * 100;
            let stein: Path2D = new Path2D();
            stein.moveTo(x, y);
            stein.quadraticCurveTo(x + 10, y - 40, x + 50, y);
            stein.quadraticCurveTo(x - 10, y + 10, x, y);
            crc.fillStyle = "Sienna";
            crc.fill(stein);
            crc.stroke(stein);
        }
        for (let i: number = 0; i < 8; i++) {
            let x: number = Math.random() * 200;
            let y: number = 500 + Math.random() * 100;
            let gras: Path2D = new Path2D();
            gras.moveTo(x, y);
            gras.quadraticCurveTo(x + 10, y - 70, x - 5, y - 90);
            gras.quadraticCurveTo(x - 20, y - 70, x - 10, y);
            crc.fillStyle = "MediumSpringGreen";
            crc.fill(gras);
            crc.stroke(gras);
        }
    }
}
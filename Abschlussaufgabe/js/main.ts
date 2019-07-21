/*
Aufgabe: <Abschlussaufgabe>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <27.07.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Abschlussaufgabe {
    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let objekteArray: AlleObjekte[] = [];
    let fps: number = 30;
    let imageData: ImageData;
    export let spielerfisch: Spielerfisch;
    export let blub: Blubber;
    export let ersterFisch: KleinerFisch;
    export let zweiterFisch: GroßerFisch

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        document.addEventListener("keydown", steuerungFisch);
        hintergrund();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 50; i++) {
            blub = new Blubber(Math.random());
            objekteArray.push(blub);
        }
        for (let i: number = 0; i < 5; i++) {
            let ersterFisch = new KleinerFisch();
            objekteArray.push(ersterFisch);
        }
        for (let i: number = 0; i < 1; i++) {
            let zweiterFisch = new GroßerFisch();
            objekteArray.push(zweiterFisch);
        }
        for (let i: number = 0; i < 2; i++) {
            let qualle: Qualle = new Qualle();
            objekteArray.push(qualle);
        }

        spielerfisch = new Spielerfisch();
        objekteArray.push(spielerfisch);

        update();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);
        fressen();
        for (let i: number = 0; i < objekteArray.length; i++) {
            objekteArray[i].update();
        }
    }

    function fressen(): void {
        for (let i: number = 0; i < objekteArray.length; i++) {
            let distanz: number = Math.hypot(objekteArray[i].x - spielerfisch.x, objekteArray[i].y - spielerfisch.y);
            if ((objekteArray[i].typ == spielerfisch.typ || objekteArray[i].typ < spielerfisch.typ) && objekteArray[i] != spielerfisch && objekteArray[i].typ != 0) {
                if (distanz < 20) {
                    objekteArray.splice(i, 1);
                    if (objekteArray[i].typ == 1) {
                        spielerfisch.w += 1;
                    }
                    else if (objekteArray[i].typ == 2) {
                        spielerfisch.w += 2;
                    }
                }
            }
            else if (objekteArray[i].typ > spielerfisch.typ) {
                if (distanz < 20) {
                    objekteArray.splice(0, 1);
                    alert("Game Over");
                }
            }
        }
    }

    //Fisch steuern
    function steuerungFisch(event: KeyboardEvent): void {
        if (event.keyCode == 39) { //rechts
            spielerfisch.x += 5;
            if (spielerfisch.x > 800) {
                spielerfisch.x = 0;
            }
        }
        if (event.keyCode == 37) { //links
            spielerfisch.x -= 5;
            if (spielerfisch.x < 0) {
                spielerfisch.x = 800;
            }
        }
        if (event.keyCode == 38) { //hoch
            spielerfisch.y -= 5;
            if (spielerfisch.y < 0) {
                spielerfisch.y = 600;
            }
        }
        if (event.keyCode == 40) { //runter
            spielerfisch.y += 5;
            if (spielerfisch.y > 600) {
                spielerfisch.y = 0;
            }
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
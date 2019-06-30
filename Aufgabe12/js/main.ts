/*
Aufgabe: <Aufgabe 12>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <30.06.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe12 {
    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let BewegteObjekteArray: BewegteObjekte[] = [];
    let fps: number = 30;
    let imageData: ImageData;


    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        hintergrund();
        canvas.addEventListener("click", futterFallen);

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 50; i++) {
            let blub: BewegteObjekte = new BewegteObjekte(Math.random());
            BewegteObjekteArray.push(blub);
        }
        for (let i: number = 0; i < 10; i++) {
            let ersterFisch: KleinerFisch = new KleinerFisch();
            BewegteObjekteArray.push(ersterFisch);
        }
        for (let i: number = 0; i < 3; i++) {
            let zweiterFisch: GroßerFisch = new GroßerFisch();
            BewegteObjekteArray.push(zweiterFisch);
        }
        for (let i: number = 0; i < 2; i++) {
            let qualle: Qualle = new Qualle();
            BewegteObjekteArray.push(qualle);
        }


        update();
    }


    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < BewegteObjekteArray.length; i++) {
            BewegteObjekteArray[i].update();
        }
    }

    function futterFallen(_event: MouseEvent): void {
        let futterX: number = _event.clientX;
        let futterY: number = _event.clientY;
        for (let i: number = 0; i < 3; i++) {
            let futter: Futter = new Futter(futterX, futterY);
            BewegteObjekteArray.push(futter);
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
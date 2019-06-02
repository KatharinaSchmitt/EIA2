/*
Aufgabe: <Aufgabe 10 Eisdealer>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <28.05.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe10 {
    window.addEventListener("load", init);
    let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        wasser();
        sand();
        fisch(230, 100);
        fisch(500, 370);
        fisch(80, 400);
        großerFisch();
        qualle();
        seestern();
        for (let i: number = 0; i < 50; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * 490;
            blubber(x, y);
        }
        for (let i: number = 0; i < 11; i++) {
            let x: number = 200 + Math.random() * 400;
            let y: number = 500 + Math.random() * 100;
            steine(x, y);
        }
        for (let i: number = 0; i < 8; i++) {
            let x: number = Math.random() * 200;
            let y: number = 500 + Math.random() * 100;
            gras(x, y);
        }
    }

    function wasser(): void {
        let wasser: Path2D = new Path2D();
        wasser.rect(0, 0, 800, 600);
        crc.fillStyle = "MediumBlue ";
        crc.fill(wasser);
        crc.stroke(wasser);
    }
    function sand(): void {
        let sand: Path2D = new Path2D();
        sand.rect(0, 500, 800, 100);
        crc.fillStyle = "SandyBrown";
        crc.fill(sand);
        crc.stroke(sand);
    }
    function blubber(_x: number, _y: number): void {
        let blub: Path2D = new Path2D();
        let a: number = 3 + Math.random() * 10;
        blub.arc(_x, _y, a, 0, 2 * Math.PI);
        crc.fillStyle = "lightblue";
        crc.fill(blub);
        crc.stroke(blub);
    }
    function steine(_x: number, _y: number): void {
        let stein: Path2D = new Path2D();
        stein.moveTo(_x, _y);
        stein.quadraticCurveTo(_x + 10, _y - 40, _x + 50, _y);
        stein.quadraticCurveTo(_x - 10, _y + 10, _x, _y);
        crc.fillStyle = "Sienna";
        crc.fill(stein);
        crc.stroke(stein);
    }
    function fisch(_x: number, _y: number): void {
        let fisch: Path2D = new Path2D();
        fisch.moveTo(_x, _y);
        fisch.quadraticCurveTo(_x + 30, _y - 40, _x + 80, _y + 15);
        fisch.lineTo(_x + 80, _y - 20);
        fisch.quadraticCurveTo(_x + 30, _y + 40, _x, _y);
        crc.fillStyle = "Crimson";
        crc.fill(fisch);
        crc.stroke(fisch);
        let auge: Path2D = new Path2D();
        auge.arc(_x + 15, _y - 2, 2, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(auge);
        crc.stroke(auge);
    }
    function großerFisch(): void {
        let grFisch: Path2D = new Path2D();
        grFisch.moveTo(400, 300);
        grFisch.quadraticCurveTo(300, 150, 150, 350);
        grFisch.lineTo(150, 250);
        grFisch.quadraticCurveTo(300, 450, 400, 300);
        crc.fillStyle = "yellow";
        crc.fill(grFisch);
        crc.stroke(grFisch);
        let auge: Path2D = new Path2D();
        auge.arc(360, 295, 5, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(auge);
        crc.stroke(auge);
    }

    function qualle(): void {
        let körper: Path2D = new Path2D();
        körper.arc(680, 100, 60, Math.PI, 2 * Math.PI);
        körper.bezierCurveTo(700, 90, 660, 110, 620, 100)
        crc.fillStyle = "purple";
        crc.fill(körper);
        crc.stroke(körper);
        let auge: Path2D = new Path2D();
        auge.arc(665, 70, 5, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(auge);
        crc.stroke(auge);
        let auge2: Path2D = new Path2D();
        auge2.arc(695, 70, 5, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(auge2);
        crc.stroke(auge2);
        arm(680, 100);
        arm(620, 100);
        arm(740, 97);
        arm(700, 98);
        arm(720, 97);
        arm(660, 103);
        arm(640, 103);
        function arm(_x: number, _y: number): void {
            let arm: Path2D = new Path2D();
            arm.moveTo(_x, _y);
            arm.bezierCurveTo(_x + 10, _y + 30, _x - 10, _y + 50, _x, _y + 70);
            crc.stroke(arm);
        }
        let mund: Path2D = new Path2D();
        mund.moveTo(660, 80);
        mund.bezierCurveTo(660, 95, 700, 95, 700, 80);
        crc.stroke(mund);
    }
    function gras(_x: number, _y: number): void {
        let gras: Path2D = new Path2D();
        gras.moveTo(_x, _y);
        gras.quadraticCurveTo(_x + 10, _y - 70, _x - 5, _y - 90);
        gras.quadraticCurveTo(_x - 20, _y - 70, _x - 10, _y);
        crc.fillStyle = "MediumSpringGreen";
        crc.fill(gras);
        crc.stroke(gras);
    }
    function seestern(): void {
        let seestern: Path2D = new Path2D();
        seestern.moveTo(650,550);
        seestern.lineTo(700,540);
        seestern.lineTo(710,500);
        seestern.lineTo(720,540);
        seestern.lineTo(770,550);
        seestern.lineTo(730,560);
        seestern.lineTo(750,590);
        seestern.lineTo(710,570);
        seestern.lineTo(670,590);
        seestern.lineTo(690,560);
        seestern.lineTo(650,550);
        crc.fillStyle = "DeepPink";
        crc.fill(seestern);
        crc.stroke(seestern);
        let auge: Path2D = new Path2D();
        auge.arc(720,550,2,0,2*Math.PI);
        crc.fillStyle = "black";
        crc.fill(auge);
        crc.stroke(auge);
        let auge2: Path2D = new Path2D();
        auge2.arc(700,550,2,0,2*Math.PI);
        crc.fillStyle = "black";
        crc.fill(auge2);
        crc.stroke(auge2);
        let mund: Path2D = new Path2D();
        mund.moveTo(720,560);
        mund.bezierCurveTo(720,570,700,570,700,560);
        crc.stroke(mund);
    }

}
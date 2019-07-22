var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class BoeserFisch extends Abschlussaufgabe.BewegteObjekte {
        constructor() {
            super();
            this.x = Math.random() * -Abschlussaufgabe.canvas.width;
            this.y = 100 + Math.random() * 300;
            this.dx = 2;
            this.dy = 0;
            this.typ = -2;
        }
        draw() {
            zahnEins(this.x - 2, this.y - 4);
            zahnEins(this.x - 10, this.y - 4);
            zahnEins(this.x - 18, this.y - 6);
            zahnEins(this.x - 26, this.y - 8);
            zahnEins(this.x - 34, this.y - 8);
            zahnEins(this.x - 42, this.y - 8);
            zahnEins(this.x - 50, this.y - 6);
            zahnEins(this.x - 58, this.y - 6);
            zahnEins(this.x - 66, this.y - 4);
            zahnEins(this.x - 74, this.y - 2);
            zahnEins(this.x - 82, this.y);
            function zahnEins(_x, _y) {
                let zahn1 = new Path2D();
                zahn1.moveTo(_x, _y);
                zahn1.lineTo(_x - 5, _y + 15);
                zahn1.lineTo(_x - 5, _y);
                zahn1.closePath();
                Abschlussaufgabe.crc.fillStyle = "yellow";
                Abschlussaufgabe.crc.fill(zahn1);
                Abschlussaufgabe.crc.stroke(zahn1);
            }
            zahnZwei(this.x - 6, this.y + 26);
            zahnZwei(this.x - 14, this.y + 30);
            zahnZwei(this.x - 22, this.y + 34);
            zahnZwei(this.x - 30, this.y + 36);
            zahnZwei(this.x - 38, this.y + 38);
            zahnZwei(this.x - 46, this.y + 40);
            zahnZwei(this.x - 54, this.y + 40);
            zahnZwei(this.x - 62, this.y + 40);
            zahnZwei(this.x - 70, this.y + 38);
            zahnZwei(this.x - 78, this.y + 38);
            zahnZwei(this.x - 86, this.y + 36);
            function zahnZwei(_x, _y) {
                let zahn2 = new Path2D();
                zahn2.moveTo(_x, _y);
                zahn2.lineTo(_x - 5, _y - 15);
                zahn2.lineTo(_x - 5, _y);
                zahn2.closePath();
                Abschlussaufgabe.crc.fillStyle = "yellow";
                Abschlussaufgabe.crc.fill(zahn2);
                Abschlussaufgabe.crc.stroke(zahn2);
            }
            let bFisch = new Path2D();
            bFisch.moveTo(this.x, this.y);
            bFisch.quadraticCurveTo(this.x - 80, this.y - 120, this.x - 220, this.y + 20);
            bFisch.quadraticCurveTo(this.x - 80, this.y + 160, this.x, this.y + 20);
            bFisch.quadraticCurveTo(this.x - 60, this.y + 60, this.x - 100, this.y + 20);
            bFisch.quadraticCurveTo(this.x - 60, this.y - 20, this.x, this.y);
            Abschlussaufgabe.crc.fillStyle = "black";
            Abschlussaufgabe.crc.fill(bFisch);
            Abschlussaufgabe.crc.stroke(bFisch);
            let flosse = new Path2D();
            flosse.moveTo(this.x - 210, this.y + 20);
            flosse.quadraticCurveTo(this.x - 260, this.y - 40, this.x - 300, this.y + 10);
            flosse.quadraticCurveTo(this.x - 260, this.y, this.x - 250, this.y + 14);
            flosse.lineTo(this.x - 280, this.y + 20);
            flosse.lineTo(this.x - 250, this.y + 26);
            flosse.quadraticCurveTo(this.x - 260, this.y + 40, this.x - 300, this.y + 30);
            flosse.quadraticCurveTo(this.x - 260, this.y + 80, this.x - 210, this.y + 20);
            Abschlussaufgabe.crc.fillStyle = "Yellow";
            Abschlussaufgabe.crc.fill(flosse);
            Abschlussaufgabe.crc.stroke(flosse);
            let auge = new Path2D();
            auge.arc(this.x - 50, this.y - 20, 10, 0, 2 * Math.PI);
            Abschlussaufgabe.crc.fillStyle = "yellow";
            Abschlussaufgabe.crc.fill(auge);
            Abschlussaufgabe.crc.stroke(auge);
            let antenne = new Path2D();
            antenne.moveTo(this.x - 60, this.y - 40);
            antenne.quadraticCurveTo(this.x, this.y - 180, this.x + 20, this.y - 60);
            Abschlussaufgabe.crc.stroke(antenne);
            let antennenLicht = new Path2D();
            antennenLicht.arc(this.x + 20, this.y - 60, 14, 0, 2 * Math.PI);
            Abschlussaufgabe.crc.fillStyle = "yellow";
            Abschlussaufgabe.crc.fill(antennenLicht);
            Abschlussaufgabe.crc.stroke(antennenLicht);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 1050) {
                this.x = Math.random() * -Abschlussaufgabe.canvas.width;
                this.y = 100 + Math.random() * 300;
            }
        }
    }
    Abschlussaufgabe.BoeserFisch = BoeserFisch;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=boeserFisch.js.map
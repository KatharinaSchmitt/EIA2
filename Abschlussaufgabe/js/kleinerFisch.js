var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class KleinerFisch extends Abschlussaufgabe.BewegteObjekte {
        constructor() {
            super();
            this.x = Math.random() * -Abschlussaufgabe.canvas.width;
            this.y = Math.random() * 500;
            this.dx = 10;
            this.dy = 0;
            this.typ = 1;
        }
        draw() {
            let fisch = new Path2D();
            fisch.moveTo(this.x, this.y);
            fisch.quadraticCurveTo(this.x - 15, this.y + 20, this.x - 40, this.y - 7.5);
            fisch.lineTo(this.x - 40, this.y + 10);
            fisch.quadraticCurveTo(this.x - 15, this.y - 20, this.x, this.y);
            Abschlussaufgabe.crc.fillStyle = "Crimson";
            Abschlussaufgabe.crc.fill(fisch);
            Abschlussaufgabe.crc.stroke(fisch);
            let auge = new Path2D();
            auge.arc(this.x - 7.5, this.y - 0.5, 1, 0, 2 * Math.PI);
            Abschlussaufgabe.crc.fillStyle = "black";
            Abschlussaufgabe.crc.fill(auge);
            Abschlussaufgabe.crc.stroke(auge);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 900) {
                this.x = 0 + this.dx;
                this.y = Math.random() * 500;
            }
        }
    }
    Abschlussaufgabe.KleinerFisch = KleinerFisch;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=kleinerFisch.js.map
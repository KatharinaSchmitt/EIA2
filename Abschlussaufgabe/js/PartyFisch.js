var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class PartyFisch extends Abschlussaufgabe.BewegteObjekte {
        constructor() {
            super();
            this.x = Math.random() * -Abschlussaufgabe.canvas.width;
            this.y = Math.random() * 500;
            this.dx = Math.random() * -10;
            this.dy = 0;
            this.typ = -3;
        }
        draw() {
            let fisch = new Path2D();
            fisch.moveTo(this.x, this.y);
            fisch.quadraticCurveTo(this.x - 40, this.y + 50, this.x - 90, this.y - 25);
            fisch.lineTo(this.x - 90, this.y + 30);
            fisch.quadraticCurveTo(this.x - 40, this.y - 50, this.x, this.y);
            Abschlussaufgabe.crc.fillStyle = Abschlussaufgabe.getRandomColor();
            Abschlussaufgabe.crc.fill(fisch);
            Abschlussaufgabe.crc.stroke(fisch);
            let auge = new Path2D();
            auge.arc(this.x - 20, this.y - 1, 2, 0, 2 * Math.PI);
            Abschlussaufgabe.crc.fillStyle = "black";
            Abschlussaufgabe.crc.fill(auge);
            Abschlussaufgabe.crc.stroke(auge);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = 900 + this.dx;
                this.y = Math.random() * 500;
            }
        }
    }
    Abschlussaufgabe.PartyFisch = PartyFisch;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=PartyFisch.js.map
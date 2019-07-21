var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class GroßerFisch extends Abschlussaufgabe.BewegteObjekte {
        constructor() {
            super();
            this.x = Math.random() * Abschlussaufgabe.canvas.width;
            this.y = 100 + Math.random() * 300;
            this.dx = 2;
            this.dy = 0;
            this.typ = 2;
        }
        draw() {
            let grFisch = new Path2D();
            grFisch.moveTo(this.x, this.y);
            grFisch.quadraticCurveTo(this.x - 100, this.y + 150, this.x - 250, this.y - 50);
            grFisch.lineTo(this.x - 250, this.y + 50);
            grFisch.quadraticCurveTo(this.x - 100, this.y - 150, this.x, this.y);
            Abschlussaufgabe.crc.fillStyle = "yellow";
            Abschlussaufgabe.crc.fill(grFisch);
            Abschlussaufgabe.crc.stroke(grFisch);
            let auge = new Path2D();
            auge.arc(this.x - 40, this.y - 5, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc.fillStyle = "black";
            Abschlussaufgabe.crc.fill(auge);
            Abschlussaufgabe.crc.stroke(auge);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 1050) {
                this.x = 0 + this.dx;
            }
        }
    }
    Abschlussaufgabe.GroßerFisch = GroßerFisch;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=großerFisch.js.map
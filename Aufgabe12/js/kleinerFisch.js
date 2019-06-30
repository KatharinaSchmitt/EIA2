var Aufgabe12;
(function (Aufgabe12) {
    class KleinerFisch extends Aufgabe12.BewegteObjekte {
        constructor() {
            super(Math.random());
            this.x = Math.random() * Aufgabe12.canvas.width;
            this.y = Math.random() * 500;
            this.dx = -5 + Math.random() * -5;
            this.dy = 0;
        }
        draw() {
            let fisch = new Path2D();
            fisch.moveTo(this.x, this.y);
            fisch.quadraticCurveTo(this.x + 30, this.y - 40, this.x + 80, this.y + 15);
            fisch.lineTo(this.x + 80, this.y - 20);
            fisch.quadraticCurveTo(this.x + 30, this.y + 40, this.x, this.y);
            Aufgabe12.crc.fillStyle = "Crimson";
            Aufgabe12.crc.fill(fisch);
            Aufgabe12.crc.stroke(fisch);
            let auge = new Path2D();
            auge.arc(this.x + 15, this.y - 2, 2, 0, 2 * Math.PI);
            Aufgabe12.crc.fillStyle = "black";
            Aufgabe12.crc.fill(auge);
            Aufgabe12.crc.stroke(auge);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = 800 + this.dx;
            }
        }
    }
    Aufgabe12.KleinerFisch = KleinerFisch;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=kleinerFisch.js.map
var Aufgabe12;
(function (Aufgabe12) {
    class GroßerFisch extends Aufgabe12.BewegteObjekte {
        constructor() {
            super(Math.random());
            this.x = Math.random() * Aufgabe12.canvas.width;
            this.y = 100 + Math.random() * 300;
            this.dx = 3 + Math.random();
            this.dy = 0;
        }
        draw() {
            let grFisch = new Path2D();
            grFisch.moveTo(this.x, this.y);
            grFisch.quadraticCurveTo(this.x - 100, this.y + 150, this.x - 250, this.y - 50);
            grFisch.lineTo(this.x - 250, this.y + 50);
            grFisch.quadraticCurveTo(this.x - 100, this.y - 150, this.x, this.y);
            Aufgabe12.crc.fillStyle = "yellow";
            Aufgabe12.crc.fill(grFisch);
            Aufgabe12.crc.stroke(grFisch);
            let auge = new Path2D();
            auge.arc(this.x - 40, this.y - 5, 5, 0, 2 * Math.PI);
            Aufgabe12.crc.fillStyle = "black";
            Aufgabe12.crc.fill(auge);
            Aufgabe12.crc.stroke(auge);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 1050) {
                this.x = 0 + this.dx;
            }
        }
    }
    Aufgabe12.GroßerFisch = GroßerFisch;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=großerFisch.js.map
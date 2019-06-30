var Aufgabe12;
(function (Aufgabe12) {
    class Futter extends Aufgabe12.BewegteObjekte {
        constructor(_x, _y) {
            super(Math.random());
            this.x = _x;
            this.y = _y;
            this.dx = 0;
            this.dy = Math.random() + 5;
        }
        draw() {
            let futter = new Path2D();
            futter.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            Aufgabe12.crc.fillStyle = "darkgreen";
            Aufgabe12.crc.fill(futter);
            Aufgabe12.crc.stroke(futter);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 590) {
                this.y = 590;
            }
        }
    }
    Aufgabe12.Futter = Futter;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=Futter.js.map
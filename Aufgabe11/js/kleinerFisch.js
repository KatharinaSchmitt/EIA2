var Aufgabe11;
(function (Aufgabe11) {
    class KleinerFisch {
        draw() {
            let fisch = new Path2D();
            fisch.moveTo(this.x, this.y);
            fisch.quadraticCurveTo(this.x + 30, this.y - 40, this.x + 80, this.y + 15);
            fisch.lineTo(this.x + 80, this.y - 20);
            fisch.quadraticCurveTo(this.x + 30, this.y + 40, this.x, this.y);
            Aufgabe11.crc.fillStyle = "Crimson";
            Aufgabe11.crc.fill(fisch);
            Aufgabe11.crc.stroke(fisch);
            let auge = new Path2D();
            auge.arc(this.x + 15, this.y - 2, 2, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "black";
            Aufgabe11.crc.fill(auge);
            Aufgabe11.crc.stroke(auge);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = 800 + this.dx;
            }
        }
    }
    Aufgabe11.KleinerFisch = KleinerFisch;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=kleinerFisch.js.map
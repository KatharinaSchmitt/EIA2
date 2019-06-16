var Aufgabe11;
(function (Aufgabe11) {
    class GroßerFisch {
        draw() {
            let grFisch = new Path2D();
            grFisch.moveTo(this.x, this.y);
            grFisch.quadraticCurveTo(this.x - 100, this.y + 150, this.x - 250, this.y - 50);
            grFisch.lineTo(this.x - 250, this.y + 50);
            grFisch.quadraticCurveTo(this.x - 100, this.y - 150, this.x, this.y);
            Aufgabe11.crc.fillStyle = "yellow";
            Aufgabe11.crc.fill(grFisch);
            Aufgabe11.crc.stroke(grFisch);
            let auge = new Path2D();
            auge.arc(this.x - 40, this.y - 5, 5, 0, 2 * Math.PI);
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
            if (this.x > 1050) {
                this.x = 0 + this.dx;
            }
        }
    }
    Aufgabe11.GroßerFisch = GroßerFisch;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=großerFisch.js.map
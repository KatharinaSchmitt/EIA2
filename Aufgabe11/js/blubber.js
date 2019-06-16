var Aufgabe11;
(function (Aufgabe11) {
    class Blubber {
        draw() {
            let blub = new Path2D();
            let a = 3 + Math.random() * 10;
            blub.arc(this.x, this.y, a, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "lightblue";
            Aufgabe11.crc.fill(blub);
            Aufgabe11.crc.stroke(blub);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 500 + this.dy;
            }
        }
    }
    Aufgabe11.Blubber = Blubber;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=blubber.js.map
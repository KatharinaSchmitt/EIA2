var Aufgabe12;
(function (Aufgabe12) {
    class BewegteObjekte {
        constructor(_x) {
            this.x = Math.random() * Aufgabe12.canvas.width;
            this.y = Math.random() * 500;
            this.dx = Math.random();
            this.dy = Math.random() * -10;
        }
        draw() {
            let blub = new Path2D();
            let a = 3 + Math.random() * 10;
            blub.arc(this.x, this.y, a, 0, 2 * Math.PI);
            Aufgabe12.crc.fillStyle = "lightblue";
            Aufgabe12.crc.fill(blub);
            Aufgabe12.crc.stroke(blub);
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
    Aufgabe12.BewegteObjekte = BewegteObjekte;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=BewegteObjekte.js.map
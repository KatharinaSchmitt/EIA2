var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Blubber extends Abschlussaufgabe.BewegteObjekte {
        constructor(_x) {
            super();
            this.x = Math.random() * Abschlussaufgabe.canvas.width;
            this.y = Math.random() * 500;
            this.dx = Math.random();
            this.dy = Math.random() * -10;
        }
        draw() {
            let blub = new Path2D();
            let a = 3 + Math.random() * 10;
            blub.arc(this.x, this.y, a, 0, 2 * Math.PI);
            Abschlussaufgabe.crc.fillStyle = "lightblue";
            Abschlussaufgabe.crc.fill(blub);
            Abschlussaufgabe.crc.stroke(blub);
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
    Abschlussaufgabe.Blubber = Blubber;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Blubber.js.map
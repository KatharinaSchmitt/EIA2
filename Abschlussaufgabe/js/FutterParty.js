var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class FutterParty extends Abschlussaufgabe.BewegteObjekte {
        constructor() {
            super();
            this.x = Math.random() * Abschlussaufgabe.canvas.width;
            this.y = Math.random() * 500;
            this.dx = 0;
            this.dy = 2;
            this.typ = -4;
        }
        draw() {
            let blub = new Path2D();
            blub.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            Abschlussaufgabe.crc.fillStyle = "lime";
            Abschlussaufgabe.crc.fill(blub);
            Abschlussaufgabe.crc.stroke(blub);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 0 + this.dy;
                this.x = Math.random() * Abschlussaufgabe.canvas.width;
            }
        }
    }
    Abschlussaufgabe.FutterParty = FutterParty;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=FutterParty.js.map
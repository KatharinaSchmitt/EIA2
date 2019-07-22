var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Qualle extends Abschlussaufgabe.BewegteObjekte {
        constructor() {
            super();
            this.x = 100 + Math.random() * 600;
            this.y = Math.random();
            this.dx = 0;
            this.dy = -5;
            this.typ = -1;
        }
        draw() {
            let körper = new Path2D();
            körper.arc(this.x, this.y, 60, Math.PI, 2 * Math.PI);
            körper.bezierCurveTo(this.x + 20, this.y - 10, this.x - 20, this.y + 10, this.x - 60, this.y);
            Abschlussaufgabe.crc.fillStyle = "purple";
            Abschlussaufgabe.crc.fill(körper);
            Abschlussaufgabe.crc.stroke(körper);
            let auge = new Path2D();
            auge.arc(this.x - 15, this.y - 30, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc.fillStyle = "black";
            Abschlussaufgabe.crc.fill(auge);
            Abschlussaufgabe.crc.stroke(auge);
            let auge2 = new Path2D();
            auge2.arc(this.x + 15, this.y - 30, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc.fillStyle = "black";
            Abschlussaufgabe.crc.fill(auge2);
            Abschlussaufgabe.crc.stroke(auge2);
            arm(this.x, this.y);
            arm(this.x - 60, this.y);
            arm(this.x + 60, this.y - 3);
            arm(this.x + 20, this.y - 2);
            arm(this.x + 40, this.y - 3);
            arm(this.x - 20, this.y + 3);
            arm(this.x - 40, this.y + 3);
            function arm(_x, _y) {
                let arm = new Path2D();
                arm.moveTo(_x, _y);
                arm.bezierCurveTo(_x + 10, _y + 30, _x - 10, _y + 50, _x, _y + 70);
                Abschlussaufgabe.crc.stroke(arm);
            }
            let mund = new Path2D();
            mund.moveTo(this.x - 20, this.y - 20);
            mund.bezierCurveTo(this.x - 20, this.y - 5, this.x + 20, this.y - 5, this.x + 20, this.y - 20);
            Abschlussaufgabe.crc.stroke(mund);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 600 + this.dy;
                this.x = 100 + Math.random() * 600;
            }
        }
    }
    Abschlussaufgabe.Qualle = Qualle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=qualle.js.map
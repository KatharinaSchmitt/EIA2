var Aufgabe12;
(function (Aufgabe12) {
    class Qualle extends Aufgabe12.BewegteObjekte {
        constructor() {
            super(Math.random());
            this.x = 100 + Math.random() * 600;
            this.y = Math.random();
            this.dx = 0;
            this.dy = Math.random() * -7;
        }
        draw() {
            let körper = new Path2D();
            körper.arc(this.x, this.y, 60, Math.PI, 2 * Math.PI);
            körper.bezierCurveTo(this.x + 20, this.y - 10, this.x - 20, this.y + 10, this.x - 60, this.y);
            Aufgabe12.crc.fillStyle = "purple";
            Aufgabe12.crc.fill(körper);
            Aufgabe12.crc.stroke(körper);
            let auge = new Path2D();
            auge.arc(this.x - 15, this.y - 30, 5, 0, 2 * Math.PI);
            Aufgabe12.crc.fillStyle = "black";
            Aufgabe12.crc.fill(auge);
            Aufgabe12.crc.stroke(auge);
            let auge2 = new Path2D();
            auge2.arc(this.x + 15, this.y - 30, 5, 0, 2 * Math.PI);
            Aufgabe12.crc.fillStyle = "black";
            Aufgabe12.crc.fill(auge2);
            Aufgabe12.crc.stroke(auge2);
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
                Aufgabe12.crc.stroke(arm);
            }
            let mund = new Path2D();
            mund.moveTo(this.x - 20, this.y - 20);
            mund.bezierCurveTo(this.x - 20, this.y - 5, this.x + 20, this.y - 5, this.x + 20, this.y - 20);
            Aufgabe12.crc.stroke(mund);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 600 + this.dy;
            }
        }
    }
    Aufgabe12.Qualle = Qualle;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=qualle.js.map
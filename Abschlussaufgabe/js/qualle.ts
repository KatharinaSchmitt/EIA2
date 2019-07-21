namespace Abschlussaufgabe {
    export class Qualle extends BewegteObjekte {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor() {
            super();
            this.x = 100 + Math.random() * 600;
            this.y = Math.random();
            this.dx = 0;
            this.dy = Math.random() * - 7;
        }

        draw(): void {

            let körper: Path2D = new Path2D();
            körper.arc(this.x, this.y, 60, Math.PI, 2 * Math.PI);
            körper.bezierCurveTo(this.x + 20, this.y - 10, this.x - 20, this.y + 10, this.x - 60, this.y)
            crc.fillStyle = "purple";
            crc.fill(körper);
            crc.stroke(körper);
            let auge: Path2D = new Path2D();
            auge.arc(this.x - 15, this.y - 30, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(auge);
            crc.stroke(auge);
            let auge2: Path2D = new Path2D();
            auge2.arc(this.x + 15, this.y - 30, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(auge2);
            crc.stroke(auge2);
            arm(this.x, this.y);
            arm(this.x - 60, this.y);
            arm(this.x + 60, this.y - 3);
            arm(this.x + 20, this.y - 2);
            arm(this.x + 40, this.y - 3);
            arm(this.x - 20, this.y + 3);
            arm(this.x - 40, this.y + 3);
            function arm(_x: number, _y: number): void {
                let arm: Path2D = new Path2D();
                arm.moveTo(_x, _y);
                arm.bezierCurveTo(_x + 10, _y + 30, _x - 10, _y + 50, _x, _y + 70);
                crc.stroke(arm);
            }
            let mund: Path2D = new Path2D();
            mund.moveTo(this.x - 20, this.y - 20);
            mund.bezierCurveTo(this.x - 20, this.y - 5, this.x + 20, this.y - 5, this.x + 20, this.y - 20);
            crc.stroke(mund);
        }


        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 600 + this.dy;
            }
        }
    }
}
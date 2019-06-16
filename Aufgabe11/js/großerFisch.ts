namespace Aufgabe11 {
    export class GroßerFisch {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {

            let grFisch: Path2D = new Path2D();
            grFisch.moveTo(this.x, this.y);
            grFisch.quadraticCurveTo(this.x - 100, this.y + 150 , this.x - 250, this.y - 50);
            grFisch.lineTo(this.x - 250, this.y + 50);
            grFisch.quadraticCurveTo(this.x - 100, this.y - 150, this.x, this.y);
            crc.fillStyle = "yellow";
            crc.fill(grFisch);
            crc.stroke(grFisch);
            let auge: Path2D = new Path2D();
            auge.arc(this.x - 40, this.y - 5, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(auge);
            crc.stroke(auge);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 1050) {
                this.x = 0 + this.dx;
            }
        }
    }
}
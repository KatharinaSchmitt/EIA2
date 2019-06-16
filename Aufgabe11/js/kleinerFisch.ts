namespace Aufgabe11 {
    export class KleinerFisch {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {

            let fisch: Path2D = new Path2D();
            fisch.moveTo(this.x, this.y);
            fisch.quadraticCurveTo(this.x + 30, this.y - 40, this.x + 80, this.y + 15);
            fisch.lineTo(this.x + 80, this.y - 20);
            fisch.quadraticCurveTo(this.x + 30, this.y + 40, this.x, this.y);
            crc.fillStyle = "Crimson";
            crc.fill(fisch);
            crc.stroke(fisch);
            let auge: Path2D = new Path2D();
            auge.arc(this.x + 15, this.y - 2, 2, 0, 2 * Math.PI);
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
            if (this.x < 0 ) {
                this.x = 800 + this.dx;
            }
        }
}
}
namespace Aufgabe11 {
    export class Blubber {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {

        let blub: Path2D = new Path2D();
        let a: number = 3 + Math.random() * 10;
        blub.arc(this.x, this.y, a, 0, 2 * Math.PI);
        crc.fillStyle = "lightblue";
        crc.fill(blub);
        crc.stroke(blub);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0 ) {
                this.y = 500 + this.dy;
            }
        }
}
}
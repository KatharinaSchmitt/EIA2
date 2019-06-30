namespace Aufgabe12 {
    export class BewegteObjekte {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor(_x: number) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * 500;
            this.dx = Math.random();
            this.dy = Math.random() * - 10;
        }

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
            if (this.y < 0) {
                this.y = 500 + this.dy;
            }
        }
    }
}
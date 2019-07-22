namespace Abschlussaufgabe {
    export class Blubber extends BewegteObjekte {

        constructor(_x: number) {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * 500;
            this.dx = 0;
            this.dy = Math.random() * - 10;
        }

        draw(): void {

            let blub: Path2D = new Path2D();
            blub.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc.fillStyle = "lightblue";
            crc.fill(blub);
            crc.stroke(blub);
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
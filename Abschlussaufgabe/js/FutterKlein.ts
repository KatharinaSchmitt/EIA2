namespace Abschlussaufgabe {
    export class FutterKlein extends BewegteObjekte {

        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * 500;
            this.dx = 0;
            this.dy = 2;
            this.typ = -6;
        }

        draw(): void {

            let blub: Path2D = new Path2D();
            blub.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            crc.fillStyle = "Red";
            crc.fill(blub);
            crc.stroke(blub);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 0 + this.dy;
                this.x = Math.random() * canvas.width;
            }
        }
    }
}
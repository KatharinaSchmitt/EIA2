namespace Aufgabe12 {
    export class Futter extends BewegteObjekte {
        constructor(_x: number, _y: number) {
            super(Math.random());
            this.x = _x;
            this.y = _y;
            this.dx = 0;
            this.dy = Math.random() + 5;
        }

        draw(): void {
            let futter: Path2D = new Path2D();
            futter.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            crc.fillStyle = "darkgreen";
            crc.fill(futter);
            crc.stroke(futter);
        }


        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 590) {
                this.y = 590;
            }
        }
    }
}
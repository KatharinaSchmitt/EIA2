namespace Abschlussaufgabe {
    export class GroßerFisch extends BewegteObjekte {
        constructor() {
            super();
            this.x = Math.random() * -canvas.width;
            this.y = 100 + Math.random() * 300;
            this.dx = 5;
            this.dy = 0;
            this.typ = 3;
        }

        draw(): void {

            let grFisch: Path2D = new Path2D();
            grFisch.moveTo(this.x, this.y);
            grFisch.quadraticCurveTo(this.x - 50, this.y + 75 , this.x - 125, this.y - 25);
            grFisch.lineTo(this.x - 125, this.y + 25);
            grFisch.quadraticCurveTo(this.x - 50, this.y - 75, this.x, this.y);
            crc.fillStyle = "yellow";
            crc.fill(grFisch);
            crc.stroke(grFisch);
            let auge: Path2D = new Path2D();
            auge.arc(this.x - 20, this.y - 2.5, 2.5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(auge);
            crc.stroke(auge);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 1050) {
                this.x = 0 + this.dx;
                this.y = 100 + Math.random() * 300;
            }
        }
    }
}
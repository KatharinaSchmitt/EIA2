namespace Abschlussaufgabe {
    export class KleinerFisch extends BewegteObjekte {

        constructor() {
            super();
            this.x = Math.random() * -canvas.width;
            this.y = Math.random() * 500;
            this.dx = 10;
            this.dy = 0;
            this.typ = 1;
        }

        draw(): void {

            let fisch: Path2D = new Path2D();
            fisch.moveTo(this.x, this.y);
            fisch.quadraticCurveTo(this.x - 15, this.y + 20, this.x - 40, this.y - 7.5);
            fisch.lineTo(this.x - 40, this.y + 10);
            fisch.quadraticCurveTo(this.x - 15, this.y - 20, this.x, this.y);
            crc.fillStyle = "Crimson";
            crc.fill(fisch);
            crc.stroke(fisch);
            let auge: Path2D = new Path2D();
            auge.arc(this.x - 7.5, this.y - 0.5, 1, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(auge);
            crc.stroke(auge);
        }


        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 900) {
                this.x = 0 + this.dx;
                this.y = Math.random() * 500;
            }
        }
    }
}
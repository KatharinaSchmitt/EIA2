namespace Abschlussaufgabe {
    export class PartyFisch extends BewegteObjekte {

        constructor() {
            super();
            this.x = Math.random() * -canvas.width;
            this.y = Math.random() * 500;
            this.dx = Math.random() * -10;
            this.dy = 0;
            this.typ = -3;
        }

        draw(): void {

            let fisch: Path2D = new Path2D();
            fisch.moveTo(this.x, this.y);
            fisch.quadraticCurveTo(this.x - 40, this.y + 50, this.x - 90, this.y - 25);
            fisch.lineTo(this.x - 90, this.y + 30);
            fisch.quadraticCurveTo(this.x - 40, this.y - 50, this.x, this.y);
            crc.fillStyle = getRandomColor();
            crc.fill(fisch);
            crc.stroke(fisch);
            let auge: Path2D = new Path2D();
            auge.arc(this.x - 20, this.y - 1, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(auge);
            crc.stroke(auge);
        }


        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = 900 + this.dx;
                this.y = Math.random() * 500;
            }
        }
    }
}
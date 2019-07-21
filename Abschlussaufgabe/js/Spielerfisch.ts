namespace Abschlussaufgabe {
    export class Spielerfisch extends AlleObjekte {

        w: number = 10; //Nummer, die verwendet wird, dass der Fisch wachsen kann

        constructor() {
            super();
            this.x = 400;
            this.y = 300;
            this.typ = 1;
        }

        draw(): void {

            let fisch: Path2D = new Path2D();
            fisch.moveTo(this.x, this.y);
            fisch.quadraticCurveTo(this.x + 3 * this.w, this.y - this.w * 4, this.x + this.w * 8, this.y + this.w * 1.5);
            fisch.lineTo(this.x + this.w * 8, this.y - this.w * 2);
            fisch.quadraticCurveTo(this.x + this.w * 3, this.y + this.w * 4, this.x, this.y);
            crc.fillStyle = "blue";
            crc.fill(fisch);
            crc.stroke(fisch);
            let auge: Path2D = new Path2D();
            auge.arc(this.x + 15, this.y - 2, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(auge);
            crc.stroke(auge);
        }
    }
}
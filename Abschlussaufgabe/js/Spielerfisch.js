var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Spielerfisch extends Abschlussaufgabe.AlleObjekte {
        constructor() {
            super();
            this.w = 5; //Nummer, die verwendet wird, dass der Fisch wachsen kann
            this.f = "aqua";
            this.x = 400;
            this.y = 300;
            this.typ = 1;
        }
        draw() {
            let fisch = new Path2D();
            fisch.moveTo(this.x, this.y);
            fisch.quadraticCurveTo(this.x + 3 * this.w, this.y - this.w * 4, this.x + this.w * 8, this.y + this.w * 1.5);
            fisch.lineTo(this.x + this.w * 8, this.y - this.w * 2);
            fisch.quadraticCurveTo(this.x + this.w * 3, this.y + this.w * 4, this.x, this.y);
            Abschlussaufgabe.crc.fillStyle = this.f;
            Abschlussaufgabe.crc.fill(fisch);
            Abschlussaufgabe.crc.stroke(fisch);
            let auge = new Path2D();
            auge.arc(this.x + this.w * 1.5, this.y - this.w / 5, this.w / 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc.fillStyle = "black";
            Abschlussaufgabe.crc.fill(auge);
            Abschlussaufgabe.crc.stroke(auge);
        }
    }
    Abschlussaufgabe.Spielerfisch = Spielerfisch;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Spielerfisch.js.map
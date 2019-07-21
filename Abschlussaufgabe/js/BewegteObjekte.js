var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class BewegteObjekte extends Abschlussaufgabe.AlleObjekte {
        constructor() {
            super();
            this.typ = 0;
        }
        draw() {
        }
        move() {
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Abschlussaufgabe.BewegteObjekte = BewegteObjekte;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=BewegteObjekte.js.map
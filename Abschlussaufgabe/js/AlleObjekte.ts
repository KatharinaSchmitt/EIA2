namespace Abschlussaufgabe {
    export class AlleObjekte {
		x: number;
		y: number;
		typ: number; //Typisierung um Fische zu vergleichen (für Fress-Funktion)

		constructor() {
		}
		draw(): void {
		}
    	update(): void {
			this.draw();
        }
    }
}
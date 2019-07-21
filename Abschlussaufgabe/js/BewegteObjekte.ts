namespace Abschlussaufgabe {
    export class BewegteObjekte extends AlleObjekte {
        dx: number;
        dy: number; 

        constructor() {
            super();
            this.typ = 0;
        }
 
		draw(): void {
		}
		move(): void {
        }
		update(): void {
            this.move();
            this.draw();
            }
    }
}
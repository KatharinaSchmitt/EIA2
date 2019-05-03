/*
Aufgabe: <Aufgabe 6>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <03.05.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe6 {

    export interface Produkte {
        kategorie: string;
        typ: string;
        name: string;
        preis: number;
        anzahlmin: number;
        anzahlmax: number;
        step: number;
        value: number;
	}

	// Homogenes assoziatives Array mit variablen Schlüsseln, 
	// ein String wird abgebildet auf ein Array mit Objekten von obigen Typ 
	export interface alleProdukte {
		[key: string]: Produkte[];
	}

	// Beispieldaten auf Basis der oben angegebenen Strukturen
	export let data: alleProdukte
		= {
		"Eissorten": [
			{kategorie: "Sorte", typ: "number", name: "Vanille", preis: 0.8, anzahlmin: 0, anzahlmax: 10, step: 1, value: 0},
            {kategorie: "Sorte", typ: "number", name: "Schokolade", preis: 0.8, anzahlmin: 0, anzahlmax: 10, step: 1, value: 0},
            {kategorie: "Sorte", typ: "number", name: "Erdbeere", preis: 0.8, anzahlmin: 0, anzahlmax: 10, step: 1, value: 0},
            {kategorie: "Sorte", typ: "number", name: "Melone", preis: 0.8, anzahlmin: 0, anzahlmax: 10, step: 1, value: 0},
            {kategorie: "Sorte", typ: "number", name: "Apfel", preis: 0.8, anzahlmin: 0, anzahlmax: 10, step: 1, value: 0},
            {kategorie: "Sorte", typ: "number", name: "Joghurt", preis: 0.8, anzahlmin: 0, anzahlmax: 10, step: 1, value: 0},
            {kategorie: "Sorte", typ: "number", name: "Walnuss", preis: 0.8, anzahlmin: 0, anzahlmax: 10, step: 1, value: 0},
            {kategorie: "Sorte", typ: "number", name: "Zitrone", preis: 0.8, anzahlmin: 0, anzahlmax: 10, step: 1, value: 0},
		],
		"Toppings": [
			{kategorie: "Topping", typ: "checkbox", name: "Sahne", preis: 0.2, anzahlmin: 0, anzahlmax: 0, step: 0, value: 0},
            {kategorie: "Topping", typ: "checkbox", name: "Schokosoße", preis: 0.2, anzahlmin: 0, anzahlmax: 0, step: 0, value: 0},
            {kategorie: "Topping", typ: "checkbox", name: "Erdbeersoße", preis: 0.2, anzahlmin: 0, anzahlmax: 0, step: 0, value: 0},
            {kategorie: "Topping", typ: "checkbox", name: "Schokostreusel", preis: 0.2, anzahlmin: 0, anzahlmax: 0, step: 0, value: 0},
            {kategorie: "Topping", typ: "checkbox", name: "Kokosstreusel", preis: 0.2, anzahlmin: 0, anzahlmax: 0, step: 0, value: 0},
		]
	};
}
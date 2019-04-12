/*
Aufgabe: <Aufgabe 3 Mau Mau>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <12.04.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

let wert: string[] = ["7", "8", "9", "10", "Bube", "Dame", "König", "As"];
let symbol: string;
let alleKarten: string[] = [];

function erstelleKartenarray(): void {
    for (let i: number = 0; i <= 32; i++) {
        if (i < 8) {
            symbol = "Herz" + wert[i];
            alleKarten.push(symbol);
        }
        else if (i >= 8 && i < 16) {
            symbol = "Pik" + wert[i % 8];
            alleKarten.push(symbol);
        }
        else if (i >= 16 && i < 24) {
            symbol = "Karo" + wert[i % 8];
            alleKarten.push(symbol);
        }
        else if (i >= 24 && i < 32) {
            symbol = "Kreuz" + wert[i % 8];
            alleKarten.push(symbol);
        }
    }
}
erstelleKartenarray();

// erstellen einer Karte als Div
let handkarten: string[] = [];
function kartenDiv(_y: number): void {
    let prodElement = document.createElement('div');
    document.getElementById("Handkarten").appendChild(prodElement);
    let karte: string = `
            <p id="${handkarten[_y]}">${handkarten[_y]}</p>
            `
    prodElement.innerHTML = karte;
}

//Eingabe der Kartenzahl durch Spieler
let anzahl: string;
function eingabeAnzahlHandkarten(): void {
    let anzahl: string = prompt("Anzahl Spielkarten");
    let anzahlHandkarten = parseFloat(anzahl);
    if (isNaN(anzahlHandkarten) == true || anzahlHandkarten < 1 || anzahlHandkarten > 31) {
        alert("Das ist ein Skatdeck. Es gibt 32 Karten. Was bitte hast du für eine Zahl eingegeben?");
        eingabeAnzahlHandkarten();
    }
    else {
        verteileKarten(anzahlHandkarten);
    }
}
eingabeAnzahlHandkarten()

//Karten auf Handkarte
function verteileKarten(_anzahlHandkarten: number): void {
    for (let y: number = 0; y < _anzahlHandkarten; y++) {
        let x: number = 0;
        x = Math.floor((Math.random() * alleKarten.length));
        handkarten.push(alleKarten[x]);
        alleKarten.splice(x, 1);
        kartenDiv(y);
        console.log(handkarten);
    }
}

//Kartenstapel wird angezeigt
function zeigeKartenstapel(): void {
    for (let b: number = 0; b < alleKarten.length; b++) {
        let prodElement = document.createElement('div');
        document.getElementById("Spielkarten").appendChild(prodElement);
        let karte: string = `
            <p id="${alleKarten[b]}">${alleKarten[b]}</p>
            `
        prodElement.innerHTML = karte;
    }
}
zeigeKartenstapel();

//Karten sortieren
document.getElementById("sortieren").addEventListener("click", sortiereKarten);
function sortiereKarten(): void {
    handkarten.sort();
    document.getElementById("Handkarten").innerHTML = ""; // Handkarten leeren, um dann neu zu befüllen
    for (let i = 0; i < handkarten.length; i++) {
        kartenDiv(i);
    }
}

//Karten ziehen
document.getElementById("Spielkarten").addEventListener("click", karteZiehen);
document.addEventListener("keydown", karteZiehenTaste);
function karteZiehenTaste(event: KeyboardEvent): void {
    if (event.keyCode == 32) {
        karteZiehen();
    }
}
function karteZiehen(): void {
    if (alleKarten.length > 0) {
        let x: number = 0;
        x = Math.floor((Math.random() * alleKarten.length));

        let prodElement = document.createElement('div');
        document.getElementById("Handkarten").appendChild(prodElement);

        handkarten.push(alleKarten[x]);

        let karte: string = `
                <p id="${alleKarten[x]}">${alleKarten[x]}</p>
                `
        prodElement.innerHTML = karte;
        alleKarten.splice(x, 1);
    }
    else {
        let prodElement = document.createElement('div');
        document.getElementById("Spielkarten").appendChild(prodElement);

        let karte: string = `
                <p></p>
                `
        prodElement.innerHTML = karte;

        alert("Kartenstapel leer. Bitte Handkarten ausspielen.");
    }
}

//Karten ausspielen 
document.getElementById("Handkarten").addEventListener("click", karteAusspielen);
function karteAusspielen(): void {
    let kartenID: HTMLElement = <HTMLElement>event.target;
    let abgelegt: string[] = [];
    for (let p: number = 0; p < handkarten.length; p++) {
        console.log(kartenID.getAttribute("id"));
        if (String(kartenID.getAttribute("id")) == handkarten[p]) {
            abgelegt.push(handkarten[p]);

            let prodElement = document.createElement('div');
            document.getElementById("Ablagestapel").appendChild(prodElement)

            let karte: string = `
                <p id="${handkarten[p]}">${handkarten[p]}</p>
                `
            prodElement.innerHTML = karte;
            handkarten.splice(p, 1);
        }
    }
}


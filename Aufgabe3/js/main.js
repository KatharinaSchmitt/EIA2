/*
Aufgabe: <Aufgabe 3 Mau Mau>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <12.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
let wert = ["7", "8", "9", "10", "Bube", "Dame", "König", "As"];
let alleKarten = [];
function erstelleKartenarray() {
    let symbol;
    for (let i = 0; i <= 32; i++) {
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
let handkarten = [];
function kartenDiv(_y) {
    let prodElement = document.createElement('div');
    document.getElementById("Handkarten").appendChild(prodElement);
    let karte = `
            <p id="${handkarten[_y]}">${handkarten[_y]}</p>
            `;
    prodElement.innerHTML = karte;
}
//Eingabe der Kartenzahl durch Spieler
let anzahl;
function eingabeAnzahlHandkarten() {
    let anzahl = prompt("Anzahl Spielkarten");
    let anzahlHandkarten = parseFloat(anzahl);
    if (isNaN(anzahlHandkarten) == true || anzahlHandkarten < 1 || anzahlHandkarten > 31) {
        alert("Du willst Mau Mau spiele. Da gibt es 32 Karten. Was bitte hast du für eine Zahl eingegeben?");
        eingabeAnzahlHandkarten();
    }
    else {
        verteileKarten(anzahlHandkarten);
    }
}
eingabeAnzahlHandkarten();
//Karten auf Handkarte
function verteileKarten(_anzahlHandkarten) {
    for (let y = 0; y < _anzahlHandkarten; y++) {
        let x = 0;
        x = Math.floor((Math.random() * alleKarten.length));
        handkarten.push(alleKarten[x]);
        alleKarten.splice(x, 1);
        kartenDiv(y);
    }
}
//Kartenstapel wird angezeigt
function zeigeKartenstapel() {
    for (let b = 0; b < alleKarten.length; b++) {
        let prodElement = document.createElement('div');
        document.getElementById("Spielkarten").appendChild(prodElement);
        let karte = `
            <p id="${alleKarten[b]}">${alleKarten[b]}</p>
            `;
        prodElement.innerHTML = karte;
    }
}
zeigeKartenstapel();
//Karten sortieren
document.getElementById("sortieren").addEventListener("click", sortiereKarten);
function sortiereKarten() {
    handkarten.sort();
    document.getElementById("Handkarten").innerHTML = ""; // Handkarten leeren, um dann neu zu befüllen
    for (let i = 0; i < handkarten.length; i++) {
        kartenDiv(i);
    }
}
//Karten ziehen
document.getElementById("Spielkarten").addEventListener("click", karteZiehen);
document.addEventListener("keydown", karteZiehenTaste);
function karteZiehenTaste(event) {
    if (event.keyCode == 32) {
        karteZiehen();
    }
}
function karteZiehen() {
    if (alleKarten.length > 0) {
        let x = 0;
        x = Math.floor((Math.random() * alleKarten.length));
        let prodElement = document.createElement('div');
        document.getElementById("Handkarten").appendChild(prodElement);
        handkarten.push(alleKarten[x]);
        let karte = `
                <p id="${alleKarten[x]}">${alleKarten[x]}</p>
                `;
        prodElement.innerHTML = karte;
        alleKarten.splice(x, 1);
    }
    else {
        document.getElementById("Spielkarten").innerHTML = "";
        alert("Kartenstapel leer. Bitte Handkarten ausspielen.");
    }
}
//Karten ausspielen 
document.getElementById("Handkarten").addEventListener("click", karteAusspielen);
function karteAusspielen() {
    let kartenID = event.target;
    let abgelegt = [];
    for (let p = 0; p < handkarten.length; p++) {
        if (kartenID.getAttribute("id") == handkarten[p]) {
            abgelegt.push(handkarten[p]);
            let prodElement = document.createElement('div');
            document.getElementById("Ablagestapel").appendChild(prodElement);
            let karte = `
                <p id="${handkarten[p]}">${handkarten[p]}</p>
                `;
            prodElement.innerHTML = karte;
            handkarten.splice(p, 1);
            document.getElementById("Handkarten").innerHTML = ""; // Handkarten leeren, um dann neu zu befüllen
            for (let i = 0; i < handkarten.length; i++) {
                kartenDiv(i);
            }
        }
    }
}
//# sourceMappingURL=main.js.map
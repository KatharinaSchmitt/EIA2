/*
Aufgabe: <Aufgabe 2 Mau Mau>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <07.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
let anzahl;
function eingabeAnzahlHandkarten() {
    anzahl = prompt("Anzahl Spielkarten");
}
eingabeAnzahlHandkarten();
let wert = ["7", "8", "9", "10", "Bube", "Dame", "König", "As"];
let symbol;
let alleKarten = [];
function erstelleKartenarray() {
    for (let i = 0; i <= 32; i++) {
        if (i < 8) {
            symbol = "Herz " + wert[i];
            alleKarten.splice(0, 0, symbol);
        }
        else if (i >= 8 && i < 16) {
            symbol = "Pik " + wert[i % 8];
            alleKarten.splice(0, 0, symbol);
        }
        else if (i >= 16 && i < 24) {
            symbol = "Karo " + wert[i % 8];
            alleKarten.splice(0, 0, symbol);
        }
        else if (i >= 24 && i < 32) {
            symbol = "Kreuz " + wert[i % 8];
            alleKarten.splice(0, 0, symbol);
        }
    }
}
erstelleKartenarray();
function verteileKarten() {
    let handkarten = [];
    let anzahlHandkarten = parseFloat(anzahl);
    for (let y = 0; y < anzahlHandkarten; y++) {
        let x = 0;
        x = Math.floor((Math.random() * alleKarten.length));
        let prodElement = document.createElement('div');
        document.getElementById("Handkarten").appendChild(prodElement);
        handkarten.push(alleKarten[x]);
        let karte = `
            <p class="${handkarten[y]}">${handkarten[y]}</p>
            `;
        prodElement.innerHTML = karte;
        alleKarten.splice(x, 1);
    }
}
verteileKarten();
function zeigeKartenstapel() {
    for (let b = 0; b < alleKarten.length; b++) {
        let prodElement = document.createElement('div');
        document.getElementById("Spielkarten").appendChild(prodElement);
        let karte = `
            <p class="${alleKarten[b]}">${alleKarten[b]}</p>
            `;
        prodElement.innerHTML = karte;
    }
}
zeigeKartenstapel();
//# sourceMappingURL=main.js.map
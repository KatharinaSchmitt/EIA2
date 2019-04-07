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
            alleKarten.splice(0, 0, "Herz " + wert[i]);
        }
        else if (i >= 8 && i < 16) {
            symbol = "Pik " + wert[i % 8];
            alleKarten.splice(0, 0, "Pik " + wert[i % 8]);
        }
        else if (i >= 16 && i < 24) {
            symbol = "Karo " + wert[i % 8];
            alleKarten.splice(0, 0, "Karo " + wert[i % 8]);
        }
        else if (i >= 24 && i < 32) {
            symbol = "Kreuz " + wert[i % 8];
            alleKarten.splice(0, 0, "Kreuz " + wert[i % 8]);
        }
    }
}
erstelleKartenarray();
function verteileKarten() {
    let handkarten = [];
    for (let y = parseFloat(anzahl); handkarten.length <= y - 1;) {
        let x = 0;
        ;
        {
            x = Math.floor((Math.random() * alleKarten.length - 1));
            let prodElement = document.createElement('div');
            let karte = `
            <p class="${alleKarten[x]}">${alleKarten[x]}</p>
            `;
            prodElement.innerHTML = karte;
            document.getElementById("Handkarten").appendChild(prodElement);
            handkarten.push(alleKarten[x]);
            alleKarten.splice(x, 1);
        }
    }
}
verteileKarten();
function zeigeKartenstapel() {
    for (let b = 0; b <= alleKarten.length - 1; b++) {
        let prodElement = document.createElement('div');
        let karte = `
            <p class="${alleKarten[b]}">${alleKarten[b]}</p>
            `;
        prodElement.innerHTML = karte;
        document.getElementById("Spielkarten").appendChild(prodElement);
    }
}
zeigeKartenstapel();
//# sourceMappingURL=main.js.map
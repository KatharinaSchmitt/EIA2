/*
Aufgabe: <Aufgabe 4 Eisdealer>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <20.04.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


namespace Eisdealer {

    window.addEventListener("load", init);

    function init(_event: Event): void {
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", adresse);
            fieldset.addEventListener("change", kugelanzahl);
            fieldset.addEventListener("change", aktuelleBestellung);
        }
    }

    function kugelanzahl(_event: Event) {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        if (target.name == "Sorte" && target.checked == true) {
            let prodStepper = document.createElement("p");
            document.getElementById("hochzählen").appendChild(prodStepper);
            let stepper: string = `
        ${target.id}
        <input type="number" name="Kugelanzahl" step="1" min="0" max="10" value="0" id="${target.id}" preis="0.80"/>
        `
            prodStepper.innerHTML = stepper;
            prodStepper.id = target.id;

            let prodElement: HTMLParagraphElement = document.createElement("p");
            document.getElementById("AusgabeBestellung").appendChild(prodElement);
            prodElement.innerHTML = target.value;
            prodElement.id = target.id;

        }
        else if (target.name == "Sorte" && target.checked == false) {

            let elternStepper: HTMLDivElement = <HTMLDivElement>document.getElementById("hochzählen");
            for (let i: number = 0; i < elternStepper.children.length; i++) {
                if (target.id == elternStepper.children[i].id) {
                    elternStepper.removeChild(elternStepper.children[i]);
                }
            }
            let elternDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("AusgabeBestellung");
            for (let b: number = 0; b < elternDiv.children.length; b++) {
                if (target.id == elternDiv.children[b].id) {
                    elternDiv.removeChild(elternDiv.children[b]);
                }
            }
        }
    }

    let summe: number = 0;
    let summe2: number = 0;
    function aktuelleBestellung(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        document.getElementById("AusgabePreis").innerHTML = "";
        document.getElementById("AusgabeDarstellung").innerHTML = "";

        let summe3: number = 0;
        
        //ausgewählte Darstellungsform anzeigen
        if (target.name == "Darstellungsform") {
            if (target.id == "Becher") {
                let prodElement = document.createElement('div');
                document.getElementById("AusgabeDarstellung").appendChild(prodElement);
                let gewählt: string = `
                <p id="Becher">Becher</p>
                `
                prodElement.innerHTML = gewählt;
            }
            else if (target.id == "Waffel") {
                let prodElement = document.createElement('div');
                document.getElementById("AusgabeDarstellung").appendChild(prodElement);
                let gewählt: string = `
                <p id="Waffel">Waffel</p>
                `
                prodElement.innerHTML = gewählt;
            }
        }
        //ausgewählte Toppings anzeigen + Preis übergeben
        if (target.name == "Topping") {
            let preis: string = target.getAttribute("preis2");
            if (target.checked == true) {
                summe += Number(preis);

                let prodElement: HTMLParagraphElement = document.createElement("p");
                document.getElementById("AusgabeBestellung").appendChild(prodElement);
                prodElement.innerHTML = target.value;
                prodElement.id = target.id;
            }
            else if (target.checked == false) {
                summe -= Number(preis);
                let elternDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("AusgabeBestellung");
                for (let i: number = 0; i < elternDiv.children.length; i++) {
                    if (target.id == elternDiv.children[i].id) {
                        elternDiv.removeChild(elternDiv.children[i]);
                    }
                }
            }
        }
        //Kugelpreis berechnen
        //hier müsste mein Fehler bei der Preisberechnung liegen
        if (target.name == "Kugelanzahl") {
            let elternDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("hochzählen");
            let preis: string = target.getAttribute("preis");
            for (let i: number = 0; i < elternDiv.children.length; i++) {
                if (target.id == elternDiv.children[i].id) {
                    summe2 += (Number(preis) * Number(target.value));
                }   
            }   
        }
        //Gesamtpreis anzeigen
        summe3 += (summe + summe2);
        let summeGerundet:string = summe3.toFixed(2);
        let prodElement: HTMLDivElement = document.createElement("div");
        document.getElementById("AusgabePreis").appendChild(prodElement);
        let preisGanz: string = `<p> ${summeGerundet} € </p>`;
        prodElement.innerHTML = preisGanz;
    }

    function adresse(_event: Event) {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        if (target.id == "liefern") {
            let prodElement = document.createElement('div');
            document.getElementById("Adresse").appendChild(prodElement);
            let ausliefern: string = `
            <fieldset>
            <legend>Lieferadresse</legend>
        <input type="text" name="Straße" placeholder="Straßenname" id="Straße" required/>
        <br>
        <input type="text" name="Nummer" placeholder="Hausnummer" id="Nummer" required/>
        <hr/>
        <input type="text" name="Postleitzahl" pattern= "[0-9]{5}" placeholder="Postleitzahl" id="PLZ" required/>
        <br>
        <input type="text" name="Stadt" placeholder="Stadt" id="Stadt" required/>
        </fieldset>
            `
            prodElement.innerHTML = ausliefern;
        }
        if (target.id == "Abholen") {
            document.getElementById("Adresse").innerHTML = "";
        }
    }

    document.getElementById("AngabenÜberprüfen").addEventListener("click", ueberpruefen);
    function ueberpruefen(): void {
        let lassLiefern: HTMLInputElement = <HTMLInputElement>document.getElementById("liefern");
        let holen: HTMLInputElement = <HTMLInputElement>document.getElementById("Abholen");
        let straße: HTMLInputElement = <HTMLInputElement>document.getElementById("Straße");
        let nummer: HTMLInputElement = <HTMLInputElement>document.getElementById("Nummer");
        let plz: HTMLInputElement = <HTMLInputElement>document.getElementById("PLZ");
        let stadt: HTMLInputElement = <HTMLInputElement>document.getElementById("Stadt");
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("Vorname");
        let nachname: HTMLInputElement = <HTMLInputElement>document.getElementById("Nachname");

        if (lassLiefern.checked == false && holen.checked == false) {
            if (vorname.value == "" || nachname.value == "") {
                alert("Bitte geben Sie einen Namen ein und wählen Sie eine Lieferform.");
            }
            else {
                alert("Bitte wählen Sie eine Lieferform.");
            }
        }
        if (holen.checked == true) {
            if (vorname.value == "" || nachname.value == "") {
                alert("Bitte geben Sie einen Namen ein.");
            }
            else {
                alert("Angaben vollständig.");
            }
        }
        if (lassLiefern.checked == true) {
            if (straße.value == "" || nummer.value == "" || plz.value == "" || stadt.value == "") {
                if (vorname.value == "" || nachname.value == "") {
                    alert("Bitte geben Sie einen Namen ein und überprüfen Sie die Adressangaben.");
                }
                else {
                    alert("Bitte überprüfen Sie die Adressangaben.");
                }
            }
            else if (vorname.value == "" || nachname.value == "") {
                alert("Bitte geben Sie einen Name ein.");
            }
            else {
                alert("Angaben vollständig.");
            }
        }
    }
}

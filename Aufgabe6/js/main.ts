/*
Aufgabe: <Aufgabe 6>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <03.055.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


namespace Aufgabe6 {

    window.addEventListener("load", init);

    function init(_event: Event): void {
        produktarrayDarstellen(data);
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", bestellungAnzeigen);
            fieldset.addEventListener("change", gesamtpreis);
            fieldset.addEventListener("change", adresse);
        }
    }

    function produktarrayDarstellen(_alleProdukte: alleProdukte): void {
        for (let key in _alleProdukte) {
            let value: Produkte[] = _alleProdukte[key];
            let div: HTMLDivElement = document.createElement("div");
            div.innerHTML = `<p>${key}</p>`;
            document.getElementById("Auswahl").appendChild(div);
            for (let i: number = 0; i < value.length; i++) {
                einzelproduktDarstellen(value[i]);
            }
        }
    }

    function einzelproduktDarstellen(_produkt: Produkte): void {
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        input.setAttribute("type", _produkt.typ);
        input.setAttribute("name", _produkt.name);
        input.setAttribute("preis", _produkt.preis.toString());
        input.setAttribute("min", _produkt.anzahlmin.toString());
        input.setAttribute("max", _produkt.anzahlmax.toString());
        input.setAttribute("step", _produkt.step.toString());
        input.setAttribute("value", _produkt.value.toString());
        input.appendChild(label);
        label.innerText = _produkt.name + " " + _produkt.preis + "€ ";
        document.getElementById("Auswahl").appendChild(label);
        label.appendChild(input);
    }

    function bestellungAnzeigen(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        if (target.name == "Darstellungsform") {
            document.getElementById("AusgabeDarstellung").innerHTML = "";
            let prodElement: HTMLParagraphElement = document.createElement("p");
            document.getElementById("AusgabeDarstellung").appendChild(prodElement);
            prodElement.innerHTML = target.value;
        }
        if (target.type == "checkbox") {
            document.getElementById("AusgabeToppings").innerHTML = "";
            for (let i: number = 0; i < input.length; i++) {
                if (input[i].checked == true) {
                    let prodElement: HTMLParagraphElement = document.createElement("p");
                    document.getElementById("AusgabeToppings").appendChild(prodElement);
                    prodElement.innerHTML = input[i].name;
                }
            }
        }
        if (target.type == "number") {
            document.getElementById("AusgabeEissorten").innerHTML = "";
            for (let i: number = 0; i < input.length; i++) {
                if (input[i].type == "number" && Number(input[i].value) > 0) {
                    let prodElement: HTMLParagraphElement = document.createElement("p");
                    document.getElementById("AusgabeEissorten").appendChild(prodElement);
                    prodElement.innerHTML = input[i].name + " " + input[i].value + "x";
                }
            }
        }
    }

    function gesamtpreis(_event: Event): void {
        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let preisGesamt: number = 0;
        document.getElementById("AusgabePreis").innerHTML = "";

        for (let i: number = 0; i < input.length; i++) {
            if (input[i].type == "number") {
                let preis: string = input[i].getAttribute("preis");
                preisGesamt += (Number(preis) * Number(input[i].value));
            }
            if (input[i].type == "checkbox" && input[i].checked == true) {
                let preis: string = input[i].getAttribute("preis");

                preisGesamt += Number(preis);
            }
        }

        let summeGerundet: string = preisGesamt.toFixed(2);
        let prodElement: HTMLDivElement = document.createElement("div");
        document.getElementById("AusgabePreis").appendChild(prodElement);
        let preisGanz: string = `<p> ${summeGerundet} € </p>`;
        prodElement.innerHTML = preisGanz;
    }

    //aus Aufgabe 4 übernommen
    function adresse(_event: Event): void {
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

    //aus Aufgabe 4 übernommen
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

    document.getElementById("Bestellen").addEventListener("click", valueRichtig);
    function valueRichtig () {
        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i:number = 0; i < input.length; i++) {
            if (input[i].type == "checkbox" && input[i].checked == true) {
                input[i].setAttribute("value", "1");
            }
        }
    }
}
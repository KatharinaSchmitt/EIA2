/*
Aufgabe: <Aufgabe 4 Eisdealer>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <18.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Eisdealer;
(function (Eisdealer) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellen);
        }
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", adresse);
        }
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", kugelanzahl);
        }
    }
    function kugelanzahl(_event) {
        let target = _event.target;
        if (target.name == "Sorte") {
            let prodElement = document.createElement('div');
            document.getElementById("Bestellung").appendChild(prodElement);
            let ausliefern = `
        ${target.id}
        <input type="number" name="Kugelanzahl" step="1" min="1" max="10" value="1" id="${target.id}"/>
        `;
            prodElement.innerHTML = ausliefern;
        }
    }
    function bestellen(_event) {
        let target = _event.target;
        if (target.name == "Topping" || target.name == "Darstellungsform" || target.name == "Sorte" || target.name == "Kugelanzahl") {
            let prodElement = document.createElement('div');
            document.getElementById("Ausgabe").appendChild(prodElement);
            let gewählt = `
            <p id="${target.id}">${target.id}</p>
            `;
            prodElement.innerHTML = gewählt;
        }
    }
    function adresse(_event) {
        let target = _event.target;
        if (target.id == "liefern") {
            let prodElement = document.createElement('div');
            document.getElementById("Adresse").appendChild(prodElement);
            let ausliefern = `
            <fieldset>
            <legend>Lieferadresse</legend>
        <input type="text" name="Straße" placeholder="Straßenname" required/>
        <br>
        <input type="text" name="Nummer" placeholder="Hausnummer" required/>
        <hr/>
        <input type="text" name="Postleitzahl" pattern= "[0-9]{5}" placeholder="Postleitzahl" required/>
        <br>
        <input type="text" name="Stadt" placeholder="Stadt" required/>
        </fieldset>
            `;
            prodElement.innerHTML = ausliefern;
        }
        else {
            document.getElementById("Adresse").innerHTML = "";
        }
    }
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=main.js.map
function willkommen():void {
  var text:string ;
  var person: string = prompt("Bitte geben Sie Ihren Namen ein:", "Name");

  if (person == null || person == "") {
    text = "Anfrage abgebrochen";
  } else {
    text = "Hallo " + person + "! Willkommen auf dieser unheimlich spannenden Seite!";
  }
  document.getElementById("Startseite").innerHTML = text;

  console.info(text);
}

willkommen()
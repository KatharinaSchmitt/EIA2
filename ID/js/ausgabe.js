var ID;
(function (ID) {
    /*Ausgeklammert, da Servereinbindung nicht funktioniert
    
    document.addEventListener('DOMContentLoaded', timerCheckDatenbank);
    let interval;

    function timerCheckDatenbank() {
        interval = setInterval(checkDaten, 1000);
      }
      
      function checkDaten() {
        refresh();
      }*/
    //Ersatz für nicht funktionierende Serververbindung
    document.getElementById("Start").addEventListener("click", prototyp);
    function prototyp() {
        document.getElementById("alles").innerHTML = "";
        let h1 = document.createElement("h1");
        h1.innerHTML = `<h1>Ausgesprochene Flüche</h1>`;
        document.getElementById("alles").appendChild(h1);
        let div = document.createElement("div");
        div.innerHTML = `<p>Dolores Umbridge</p>`;
        document.getElementById("alles").appendChild(div);
        let div2 = document.createElement("div");
        div2.innerHTML = `<p>Peter Pettigrew</p>`;
        document.getElementById("alles").appendChild(div2);
        let div3 = document.createElement("div");
        div3.innerHTML = `<p>Augustus Rookwood</p>`;
        document.getElementById("alles").appendChild(div3);
        let div4 = document.createElement("div");
        div4.innerHTML = `<p>Bellatrix Lestrange</p>`;
        document.getElementById("alles").appendChild(div4);
        let div5 = document.createElement("div");
        div5.innerHTML = `<p>Fenrir Greyback</p>`;
        document.getElementById("alles").appendChild(div5);
        let div6 = document.createElement("div");
        div6.innerHTML = `<p>Lucius Malfoy</p>`;
        document.getElementById("alles").appendChild(div6);
        let div7 = document.createElement("div");
        div7.innerHTML = `<p>Alec Carrow</p>`;
        document.getElementById("alles").appendChild(div7);
        let div8 = document.createElement("div");
        div8.innerHTML = `<p>Amycus Carrow</p>`;
        document.getElementById("alles").appendChild(div8);
        let div9 = document.createElement("div");
        div9.innerHTML = `<p>Walden Macnair</p>`;
        document.getElementById("alles").appendChild(div9);
        let div10 = document.createElement("div");
        div10.innerHTML = `<p>Barty Crouch Jr.</p>`;
        document.getElementById("alles").appendChild(div10);
        setTimeout(video, 3000);
    }
    function video() {
        document.getElementById("alles").innerHTML = "";
        let video = document.createElement('video');
        video.setAttribute('src', './animation/voodoo.mp4');
        video.setAttribute('width', '768px');
        document.getElementById("alles").appendChild(video);
        video.play();
        setTimeout(anhang, 5500);
    }
    function anhang() {
        document.getElementById("alles").innerHTML = "";
        let h1 = document.createElement("h1");
        h1.innerHTML = `<h1>Ausgesprochene Flüche</h1>`;
        document.getElementById("alles").appendChild(h1);
        let div0 = document.createElement("div");
        div0.innerHTML = `<p>Tom Riddle</p>`;
        document.getElementById("alles").appendChild(div0);
        let div1 = document.createElement("div");
        div1.innerHTML = `<p>Dolores Umbridge</p>`;
        document.getElementById("alles").appendChild(div1);
        let div2 = document.createElement("div");
        div2.innerHTML = `<p>Peter Pettigrew</p>`;
        document.getElementById("alles").appendChild(div2);
        let div3 = document.createElement("div");
        div3.innerHTML = `<p>Augustus Rookwood</p>`;
        document.getElementById("alles").appendChild(div3);
        let div4 = document.createElement("div");
        div4.innerHTML = `<p>Bellatrix Lestrange</p>`;
        document.getElementById("alles").appendChild(div4);
        let div5 = document.createElement("div");
        div5.innerHTML = `<p>Fenrir Greyback</p>`;
        document.getElementById("alles").appendChild(div5);
        let div6 = document.createElement("div");
        div6.innerHTML = `<p>Lucius Malfoy</p>`;
        document.getElementById("alles").appendChild(div6);
        let div7 = document.createElement("div");
        div7.innerHTML = `<p>Alec Carrow</p>`;
        document.getElementById("alles").appendChild(div7);
        let div8 = document.createElement("div");
        div8.innerHTML = `<p>Amycus Carrow</p>`;
        document.getElementById("alles").appendChild(div8);
        let div9 = document.createElement("div");
        div9.innerHTML = `<p>Walden Macnair</p>`;
        document.getElementById("alles").appendChild(div9);
    }
})(ID || (ID = {}));
//# sourceMappingURL=ausgabe.js.map
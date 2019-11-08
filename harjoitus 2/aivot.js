function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");
    

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML = "<table><tr><td></td><td></td><td></td>" + 
        "</tr><tr></tr><tr></tr></tablet>";
        document.getElementById("laatikko2").style.lineHeight = "200px";
        
        // toiminnallisuus puuttuu!
    }
    else  if(boxNumber == 3){
        document.getElementById("laatikko3").innerHTML = "<img src='vantaa.jpg' height='100px' width='100px'>";
        document.getElementById("laatikko3").style.lineHeight = "200px";
        //toiminnallisuus puuttuu!
    }

    else if(boxNumber == 4){
        document.getElementById("laatikko4").innerHTML = document.location.reload(true);
        
    }
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = x.length-1;i>= 0;i--) {
      text += x.elements[i].name+": "+x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }


  function diagrammiFunktio(){
    // etsitään harjoitus2.html sivulta elementti, jonka id=myCanvas
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    
    // diagrammiin voidaan kirjoittaa numeroita haluttuihin kohtiin.
    ctx.fillText("50" , 0, 450);
    ctx.fillText("40" , 40, 200);
    ctx.fillText("60" , 60, 250);
    ctx.fillText("150" , 150, 210);
    ctx.fillText("200" , 200, 250);
    ctx.fillText("230" , 230, 260);
    ctx.fillText("250" , 250, 300);
    ctx.fillText("270" , 270, 350);
   
    
    // Alla olevalla koodilla voidaan piirtää viivaa diagrammiin.
    ctx.moveTo(40, 200);
    ctx.lineTo(60, 250);
    ctx.lineTo(150, 200);
    ctx.lineTo(200, 250);
    ctx.lineTo(230, 260);
    ctx.lineTo(250, 300);
    ctx.lineTo(270, 350);
    ctx.stroke();
    }
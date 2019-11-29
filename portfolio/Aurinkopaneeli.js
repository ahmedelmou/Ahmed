function haeTiedostosta(){
    $.ajax({
        type: "GET",
        url: "https://paneelipalvelin.azurewebsites.net/arvot",
        cache: false,
        success: function(data){
            var arrayData="";
            $("#testi").html(arrayData[0]);
            var c = document.getElementById("mycanvas");
            var arvoArray;
            var arvoPituus;
            var piste=40;
            var diagrammi = c.getContext("2d");
            arvoArray = data.split(":");
            arvoPituus= arvoArray.length;

            diagrammi.beginPath();
            diagrammi.strokeStyle = "blue";
            diagrammi.moveTo(piste, 400-(200+(arvoArray[0]*5)));
            diagrammi.fillText(arvoArray[0], piste, 400-(200+(arvoArray[0]*5)));

            for (i = 1; i < arvoPituus;i++) {
                piste=piste+20;
                diagrammi.lineTo(piste, 400-(200+(arvoArray[i]*5)));
                diagrammi.fillText(arvoArray[i], piste, 400-(200+(arvoArray[i]*5)));
            }
            diagrammi.stroke();
            diagrammi.fillText("-30", 0, 350);
            diagrammi.fillText("-20", 0, 300);
            diagrammi.fillText("-10", 0, 250);
            diagrammi.fillText("0", 0, 200);
            diagrammi.fillText("10", 0, 150);
            diagrammi.fillText("20", 0, 100);
            diagrammi.fillText("30", 0, 50);

            diagrammi.fillText("5.8.", 120, 400);
            diagrammi.fillText("10.8.", 220, 400);
            diagrammi.fillText("15.8.", 320, 400);
            diagrammi.fillText("20.8.", 420, 400);
            diagrammi.fillText("25.8.", 520, 400);
            diagrammi.fillText("30.8.", 620, 400);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            console.log("error");

        }
    });
}
function myFunction() {
    location.href = "index.html";
}
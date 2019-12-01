var intervalID;
     
function showDate() {
    var d = new Date();
    document.getElementById("aika").innerHTML = d.toLocaleTimeString()+"  /  "+d.toLocaleDateString();
}
 
var intervalID = setInterval(showDate,);
var intervalID = setInterval(showTime, 500);
function myFunction1() {
        location.href = "index.html";
}
function myFunction2() {
    location.href = "Ohjelmointi.html";
}
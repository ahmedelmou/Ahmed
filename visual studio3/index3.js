$(document).ready(function(){
   
    $("button").click(function(){
        $(".box")
            .animate({width: "300px"})
            .animate({height: "300px"})
            .animate({marginLeft: "150px"})
            .animate({borderWidth: "10px"})
            .animate({opacity: 0.5});
        
    });
   
 });
$(document).ready(function(){ 
    $(".kuva").mouseover(function(){
        $(".kuva").hide();
    });
    $(".kuva").mouseleave(function(){
        $(".kuva").show();

    });
});
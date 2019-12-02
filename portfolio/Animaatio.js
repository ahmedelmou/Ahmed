$(document).ready(function(){
   
    $(".start").click(function(){
        $(".box")
            .animate({width: "600px"})
            .animate({height: "400px"})
            .animate({marginLeft: "350px"})
            .animate({borderWidth: "1px"})
            .animate({opacity: 0.5});
        
    });
    $(".return").click(function(){
        $(".box")
            .animate({width: "600px"})
            .animate({height: "400px"})
            .animate({marginLeft: "0"})
            .animate({borderWidth: "1px"})
            .animate({opacity: 0.5});
        
    });
   
 });
 $(document).ready(function(){
    $(".box").hover(function(){
        $(this).find("img").stop(true, true).fadeOut();
    }, function(){
        $(this).find("img").stop(true, true).fadeIn();
    });
});
function myFunction() {
    location.href = "index.html";
}
$(document).ready(function(){
    $(".start2").click(function(){
        $("p").animate({width: "100%"}).animate({fontSize: "46px"}).animate({borderWidth: 30});
    });
    $(".reset2").click(function(){
        $("p").removeAttr("style");
    });
});  

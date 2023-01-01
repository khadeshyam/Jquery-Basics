$("button").html("<h1>Dont click me</h1>")

$("a").attr("href","https://www.yahoo.com");

$("h1").click(()=>{
    $("h1").css("color","purple");
});

$("button").click((event)=>{
    console.log(event.target);
});


$(document).keypress(function (event) { 
    $("h1").text(event.key);
});

$("h1").on("mouseover",()=>{
    $("h1").css("color","blue");
});

$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");

$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");

$("h1").addClass("big-title");
 
//learn animations in JQuery
$("button").on("click",function(){
    $("h1").hide();
    $("h1").show();
    $("h1").toggle();

    $("h1").fadeOut();
    $("h1").fadeIn();
    $("h1").fadeToggle();

    $("h1").animate({
        opacity:0.5,
    });

   //animation chaining  
    $("h1").slideUp().slideDown().animate({opacity:0.5})
  })
  
// learn more at https://www.w3schools.com/jquery/jquery_animate.asp
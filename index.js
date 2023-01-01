//$("button").html("<h1>Dont click me</h1>")

//$("a").attr("href","https://www.yahoo.com");


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

 

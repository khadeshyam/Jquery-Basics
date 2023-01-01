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


 

// JavaScript source code
//$() => jQuery

$(function(){
	
	var fourDivs =	"<div id='1' class='four'></div>" +
					"<div id='2' class='four'></div>" +
					"<div id='3' class='four'></div>" +
					"<div id='4' class='four'></div>";

	$("#main").append(fourDivs);
	$("#main").css("margin" , "10px");

	$(".four").css({"display" : "inline-block" , "height" : "100px" , "width" : "100px" , "border-style" : "solid",  "text-align" : "center"});
	$("div:odd").css({"background-color" : "black" , "border-color" : "black" , "color" : "white"});

	$("#chgColor").click(function(){
		$("div:odd").css({"background-color" : "green" , "border-color" : "black" , "color" : "white"});
	})

	for(i=1; i<5; i++)
	{
		$("#" + i).append(i);
	}

	$("#chgText").click(function(){
		for(i=1; i<5; i++)
		{
			$("#" + i).prepend("Div");
		}
	})


})
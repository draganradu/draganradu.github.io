
function perfecttop(){
	var padding_top = ($(window).outerHeight() - $("#box").outerHeight())/2; 
	$("#box").css("margin-top", padding_top);
	$("#inner-text").html(padding_top + "<sup>px</sup>");
}

perfecttop(); // run on page loade

$(window).resize(function(){
    perfecttop();
}); // run on resize
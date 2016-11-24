function resizer(){
var a = $('#index').innerWidth();
$(".unu").css("height", a);
$(".unu .inner").css("height", a - 20);
$(".doi").css("height", a*2);
$(".doi .inner").css("height", a*2 - 20);
}
function rize(){
	if (window.innerWidth < 768) {
		$(".unu, .doi").css("height", window.innerHeight/5);
		$(".unu .inner, .doi .inner").css("height", (window.innerHeight/5)-20);

	};
}

resizer();
rize();

$( window ).resize(function() {
  resizer();
  rize();
});


$("[class^='btn-']").click(function(){
	if( $(this).attr("class").split(" ")[1] == "activ" ){
		$(".activ").removeClass("activ");
		$(".disable").removeClass("disable");
	}
	else{
		$(".activ").removeClass("activ");
		$(".disable").removeClass("disable");
		$("."+ $(this).attr("class").substring(4,$(this).attr("class").length) ).addClass("disable");
		$("."+ $(this).attr("class")).addClass("activ");
	}
	});

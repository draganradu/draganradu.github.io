// test
function color(timp){
    var z = timp.getDate();
    var l = timp.getMonth()+1;
    if (timp.getFullYear() > 1999 && timp.getFullYear()<3000){
      var a = timp.getFullYear()-2000;
    }
    else{
      var a = timp.getFullYear()-1900;
    }
    var lina = new Date(timp.getFullYear(), l, 0).getDate(); // cate zile are luna

    if (z < 1 || z>31 || isNaN(z)){ z = 1; }
    if (l<1 || l>12 || isNaN(l)){ l= 1;}
    if (a<1 || a>99 || isNaN(a)){ a= 0;}
    if (lina <1 || lina>31 || isNaN(lina)){ lina = 10;}

    var r = Math.round(z*(255/lina));
    var g = Math.round(l*(255/12));
    var b = Math.round(a*2.55);
    // r = g = b = 255;
    var gri = 100-Math.round(((r+g+b)/3)/2.55);
    if (gri > 70) {
      $("#color").addClass("alb");
    }
    else {
      $("#color").removeClass("alb");
    }
    $("#data").html();
    $("#rgb").html(r+" "+g+" "+b);
    $("#color").html("#" + r.toString(16)+ g.toString(16)+ b.toString(16));
    $("#principal").css("background-color","rgb("+r+","+g+","+b );
    $("#under").html("<span>R:"+r+" G:"+g+" B:"+b+" | Data: "+z+"/"+l+"/"+a + " [luminescenta: " + gri + "%]</span>");
    $(".field-color").css("width", $("#under span").outerWidth() + "px" );
}
var timp = new Date();
color(timp);

//on click
$("#box-down").click(function(){
  $("#text").toggleClass("activ");
  $("#box-down").toggleClass("activ");
  $(".field-color").toggle("800");
});

// on key-up

$(".field-color").on("keyup change", function() {
  color(new Date($(".field-color").val()));
});


$("#placeholde-a-nume-full").html(data.nume.informal);
$("#placeholde-a-functie").html(data.work.title);


$("#placeholde-a-description").html(i_build_stack("user-circle") + data.work.text);
$("#placeholde-a-tel").html(i_build_stack("phone") + tel_formater(data.footprint.tel));
$("#placeholde-a-email").html(i_build_stack("newspaper-o") + data.footprint.email);


projects.forEach(function(element) {
  $("#placeholde-b-data").append(data_build(element));
});

$("#placeholde-b-data").append(social_build(data));

$("#placeholde-b-data").append(tutorial_build(data.tutorial));



/* ---------------------------------------------
-------------- Event listaners -----------------
-----------------------------------------------*/

$('.show-more.tutorial').on('click', function (){
  $('tr.false').toggle(1000);
});

$('td').on('mouseover', function (){
  let temp = $(this)[0].className;

  if (temp !== ""){
    $('tr.'+ temp).addClass('active');
  }

}).on( "mouseleave", function(){
  let temp = $(this)[0].className;

  if (temp !== ""){
    $('tr.'+ temp).removeClass('active');
  }
});

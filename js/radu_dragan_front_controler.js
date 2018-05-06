function wrap(tag,data,a_class){
  if(a_class == undefined || a_class == ""){
    return "<" + tag + ">" + data +  "</" + tag + ">";
  }
    return "<" + tag + " class='" + a_class  +  "'>" + data +  "</" + tag + ">";
    return "<" + tag + " class='" + a_class  +  "'>" + data +  "</" + tag + ">";
}

function wrap_a(href,icon){
  return  '<a href="'+ href +'"><span class="fa-stack">' + i_build_stack(icon) + '</i></span></a>';
}

function wrap_social_a(element){
  return '<a href="' + element.link + '"><i class="fa fa-' + element.name + '"></i></a>'
}

function data_build(object){
  var temp = ["",""];
  temp[0] += wrap("h2",object.name);
  temp[0] += wrap("p",object.description);

  temp[1] += wrap_a(object.link_git,'git');
  temp[1] += wrap_a(object.link_play,'angle-right');

  temp[1] = wrap("div",temp[1],"project-element-footer text-right");

  temp[0] += temp[1];

  temp[0] = wrap("div",temp[0],"project-element triungle");
  return temp[0];
}


function social_build(object){
var temp = "";

  object.footprint.social_media.forEach(function(element) {
    temp += wrap_social_a(element);
  });

  temp = wrap("div",temp,"social-media");
  return temp;
}

function star_build(number){
  var temp = "";
  for (var i = 0; i < number; i++) {
    temp += '<i class="fa fa-star"></i>';
  }
  return temp;
}

function table_build(element){

  var temp = {
    full : "",
    tr: "",
    tr_temp: "",
    count: 1,
    ellipsis : {
      set: true,
      class: "show",
      count: 3,
      read_more : ""
    }
  };

  temp.tr += wrap("th","#") + wrap("th","Title") + wrap("th","Category") + wrap("th","Rate");
  temp.tr = wrap("tr",temp.tr);
  temp.full += wrap("thead",temp.tr);

  temp.tr = "";

  element.forEach(function(element) {

    if (temp.ellipsis.set && temp.ellipsis.count < temp.count){
        temp.ellipsis.set = false;
        temp.ellipsis.class = "false";
    }
    temp.tr_temp = wrap("td",temp.count) + wrap("td",element.name) + wrap("td",element.category, element.category.toLowerCase()) + wrap("td",star_build(element.rate));
    temp.tr += wrap("tr",temp.tr_temp,temp.ellipsis.class + ' ' + element.category.toLowerCase());
    temp.count ++;

  });

  temp.full += wrap("tbody",temp.tr);

  if(temp.ellipsis.set == false){
      temp.ellipsis.read_more = wrap('tr','<td colspan="4"><button type="button" class="btn show-more tutorial">Show More</button></td>');

      temp.full += wrap("tfoot",temp.ellipsis.read_more);
  }

  return wrap("table", temp.full, "table");
}

var sort_by = function(field, reverse, primer){

   var key = primer ?
       function(x) {return primer(x[field])} :
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     }
}

function tutorial_build(object){
  var temp = "";
  temp += wrap("h2","Tutorial");
  temp += wrap("p","This is a list of tutorials i have read or watched recently and i feel are useful or just fun.");
  object.sort(sort_by('name', false, function(a){return a.toUpperCase()}));

  temp += table_build(object);
  temp = wrap("div",temp,"element-tutorial");

  return temp;
}

function i_build_stack(name){
  return `<span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-${name} fa-stack-1x fa-inverse"></i>
      </span>`;
}

function tel_formater(number){
  var temp  ={
    row: number.trim(),
    out: "",
    d_a: ".",
    d_b: 3,
    d_temp: 1
  }

for(i = temp.row.length - 1; i>=0; --i){
  temp.out = temp.row[i] + temp.out ;
  if(temp.d_temp%3 == 0 && temp.row.length - 1 != temp.d_temp){
    temp.out = "." + temp.out;
  }
  temp.d_temp ++;
}
  return `<a href="tel:${temp.row}">${temp.out}</a>`;
}

function build_file(name){


  return `<div class="element-file"><a href="${name}"><i class="fa fa-file-word-o" aria-hidden="true"></i><br><span>cv 2018</span></a></div>`;
}

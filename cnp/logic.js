var luni = [
  "",
  "Ianuarie",
  "Februarie",
  "Martie",
  "Aprilie",
  "Mai",
  "Iunie",
  "Iulie",
  "August",
  "Septembrie",
  "Octombrie",
  "Noiembrie",
  "Decembrie"
];

var zile = [
  "Duminica",
  "Luni",
  "Marti",
  "Miercuri",
  "Joi",
  "Vineri",
  "Sambata"
]

var lista_orase = [
  "",
  "Alba",
  "Arad",
  "Argeș",
  "Bacău",
  "Bihor",
  "Bistrița-Năsăud",
  "Botoșani",
  "Brașov",
  "Brăila",
  "Buzău",
  "Caraș-Severin",
  "Cluj",
  "Constanța",
  "Covasna",
  "Dâmbovița",
  "Dolj",
  "Galați",
  "Gorj",
  "Harghita",
  "Hunedoara",
  "Ialomița",
  "Iași",
  "Ilfov",
  "Maramureș",
  "Mehedinți",
  "Mureș",
  "Neamț",
  "Olt",
  "Prahova",
  "Satu Mare",
  "Sălaj",
  "Sibiu",
  "Suceava",
  "Teleorman",
  "Timiș",
  "Tulcea",
  "Vaslui",
  "Vâlcea",
  "Vrancea",
  "București",
  "București Sector: 1",
  "București Sector: 2",
  "București Sector: 3",
  "București Sector: 4",
  "București Sector: 5",
  "București Sector: 6",
  "Călărași",
  "Giurgiu",
];


function cifra_control(value){

  var temp = [
    0,
    value,
    "279146358279"
  ];
  temp[3] = temp [1][12];
  temp[1] = temp[1].substring(0, (temp[1].length -1));
  for (var i = 0; i < temp[1].length; i++) {
    temp[0] += parseInt(temp[1][i]) * parseInt(temp[2][i]);
  }
  temp[0] = temp[0] % 11;
  if (temp[0] == 10){
    temp[0] = 1;
  }
  if (temp[0] == temp[3]){
    return true;
  } else {
    return false;
  }
}



function model_cnp(row_data){
  this.debug = 0;
  this.row_data = [];
  this.row_data.string = row_data.toString();
  this.row_data.numb = parseInt(row_data);

  if (this.row_data.string.length !== 13){
    this.debug = 1;
    return;
  }

  if ( !cifra_control(this.row_data.string) ){
    this.debug = 2;
    return ;
  }

    this.time = [];
    this.time.now = new Date();

    var temp_sex = [];

    if (this.row_data.string[0] == 9){
      this.sex = "Unknown";
      this.nascut = "not RO";
    }
    if (this.row_data.string[0]%2 == 0){
      this.sex = "F";
    } else {
      this.sex = "M";
    }
    this.nascut = "RO";

    if ( this.row_data.string[0] < 3 ){
        this.an = 1900 + parseInt(this.row_data.string.substring(1, 3));
      } else if ( this.row_data.string[0] < 5) {
        this.an = 2000 + parseInt(this.row_data.string.substring(1, 3));
      } else {
        if( this.time.now.getFullYear() < 2000 + parseInt(this.row_data.string.substring(1, 3))){
          this.an = 1900 + parseInt(this.row_data.string.substring(1, 3));
        } else {
          this.an = 2000 + parseInt(this.row_data.string.substring(1, 3));
        }
      }

      this.luna = [];
      this.luna[0] = this.row_data.string.substring(3, 5);
      this.luna[1] = window.luni[parseInt(this.luna[0])];
      if (this.luna[0] > 12) {
        this.debug = 3;
      }


      this.zi = [];
      this.zi[0] = this.row_data.string.substring(5, 7);
      this.time.temp = new Date(this.luna[0] + "/" + this.zi[0] + "/" + this.an);
      this.zi[1] = this.time.temp.getDay();
      this.zi[2] = window.zile[this.zi[1]];
      if( new Date(this.an, this.luna[0], 0).getDate() < this.zi[0]){
        this.debug = 4;
      }

      this.oras = [];
      this.oras[0] = this.row_data.string.substring(7, 9);
      this.oras[1] = window.lista_orase[this.oras[0]];

      if(this.oras[0] > 52){
        this.debug = 5;
      }

      this.time.diff = this.time.now.getTime() - this.time.temp.getTime() ;

      if(this.time.diff < 0){
        this.debug = 6;
      }

      this.varsta = Math.floor(this.time.diff / (1000 * 3600 * 24 * 365));
      this.major =  this.varsta > 17 ? true : false;
}


function _tr(data){
  return "<tr>" + data + "<tr>";
}

function _td(data){
  return "<td>" + data + "<td>";
}
function _th(data){
  return "<th>" + data + "<th>";
}

function _td_span(data,span){
  return "<td colspan='"+ span +"'>" + data + "<td>";
}

function _th_span(data,span){
  return "<th colspan='"+ span +"'>" + data + "<td>";
}

function _tb(data){
  return "<table class='table'>" + data + "<table>";
}

function _row(array){
  var temp = "";

  if (array.length == 1){
    temp += _td_span(array[0],3);
  } else {
    array.forEach(function(element){
      temp += _td(element);
    });
  }

  temp = _tr(temp);
  return temp;
}

function _row_th(array){
  var temp = "";

  if (array.length == 1){
    temp += _th_span(array[0],3);
  } else {
    array.forEach(function(element){
      temp += _th(element);
    });
  }

  temp = _tr(temp);
  return temp;
}

function _table_view(object){

var temp = "";

if (object.debug != 0){
  temp += _row_th(["CNP Invalid"]);
  temp = _tb(temp);
  return temp;
}

temp += _row_th(["CNP Valid"]);

temp += _row(["Varsta",`${object.varsta} ani`]);
temp += _row(["",((object.major) ? 'Major' : 'Minor') ]);

temp += _row(["Nascut",object.zi[2] + " " + object.zi[0] + " " + object.luna[1] + "<br>" + object.an]);
temp += _row(["",`${object.oras[1]} [ ${object.nascut} ]`]);
temp += _row(["SEX",object.sex]);

temp = _tb(temp);
return temp;
}

//-------------------- debug --------------------
//-----------------------------------------------
// -------- 0 -------- no error -----------------
// -------- 1 -------- caracter count -----------
// -------- 2 -------- control digit ------------
// -------- 3 -------- luna prea mare -----------
// -------- 4 -------- zi prea mare -------------
// -------- 5 -------- citiy dose not exist -----
// -------- 6 -------- future time --------------


$( document ).ready(function() {
  var obiect;

  $("#cnp-input-data").on('keyup', function(){
      if ($("#cnp-input-data").val().toString().length == 13){
         obiect = new model_cnp($("#cnp-input-data").val().toString());
         $('#cnp-output-table').html(_table_view(obiect));
         $('#cnp-output-table').blur();
         console.log(obiect);
     }

    // $('#cnp-output-table').text(data._table_build);
  });

});

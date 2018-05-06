var luni = [
"ianuarie",
"februarie",
"martie",
"aprilie",
"mai",
"iunie",
"iulie",
"august",
"septembrie",
"octombrie",
"noiembrie",
"decembrie"
];

var zile = [
  "luni",
  "marti",
  "miercuri",
  "joi",
  "vineri",
  "sambata",
  "duminica"
]


var data = {
  "output" : false,
  "data" : false,
  "valid": false,
  "sex" : "M",
  "nascut" : "RO",
  "varsta": 0,
  "an": 00,
  "luna": [],
  "zi": [],
  "zi_spt": "",
  "judet": "",
  "row": "",
  "debug": 0,
  "now" : {}
  }

   data._control_d = function(value){
     var key =   279146358279;
     var temp = [
       0,
       value.toString(),
       key.toString()
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

data._f_sex = function(){
  var temp = [];
  temp[0] = this.row.toString()[0];
  if (temp[0] == 9){
    this.sex = "Unknown";
    this.nascut = "not RO";
    return;
  }
  if (temp[0]%2 == 0){
    this.sex = "F";
  } else {
    this.sex = "M";
  }
  return;
}

data._zi = function(){
      var temp = new Date(this.luna[0] + "/" + this.zi[0] + "/" + this.an);
      this.zi[0] = this.row.substring(5, 7);
      this.zi[1] = temp.getDay() - 1;
      this.zi[2] = window.zile[this.zi[1]];
      return;
}

data._f_date = function(){
  var temp = [];
  temp[0] = 20 + this.row.substring(1, 3);
  if (this.row.toString()[0] < 3 ){
    this.an = 19 + this.row.substring(1, 3);
  } else if (this.row.toString()[0] < 5 ){
    this.an = 20 + this.row.substring(1, 3);
  } else {
    if( data.now.getFullYear() < parseInt(20 + this.row.substring(1, 3))){
      this.an = 19 + this.row.substring(1, 3);
    } else {
      this.an = 20 + this.row.substring(1, 3);
    }
  }

  if(parseInt(this.luna[0]) > 12 ){
    this.debug = 3;
    return;
  }

  this.luna[0] = this.row.substring(3, 5);
  this.luna[1] = window.luni[parseInt(this.luna[0]) - 1];





    return;
  }


   data._input = function(numb){
    if (numb.length == 13){
      if (this._control_d(this.row)){
         this._f_sex();
         this._f_date();
         this._zi();
      } else {
        this.debug = 2;
      }
    } else {
        this.debug = 1;
      return;
    }
  }

  data._table_build = function(){
    function table_line(nume, value){
      var temp_table = "";
      temp_table += "<td>" + nume + "</td>";
      temp_table += "<td>" + value + "</td>";

      temp_table = "<tr>" + temp_table + "</tr>";
      return "<tr><td>";
    }

    var temp = "";



    var temp = '<table class="table">' + temp + '</table>';
    return "Ana Are mere";
  }




// 1870921260050
// 2981110040171
// 6070507101811

//-------------------- debug --------------
//-----------------------------------------
// -------- 0 -------- no error -----------
// -------- 1 -------- caracter count -----
// -------- 2 -------- control digit ------
// -------- 3 -------- luna prea mare -----


$( document ).ready(function() {

  $('#cnp-output-table').text("B");

  $("#cnp-input-data").on('keyup', function(){
  data.now = new Date();
   data.row = $("#cnp-input-data").val().toString();
   data._input(data.row);
     $('#cnp-output-table').text(data._table_build);
  });

});

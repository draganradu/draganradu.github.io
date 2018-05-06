$( "#cnp" ).keyup(function() {
	var luna = ["","Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];
	var zi = ["Duminica","Luni","Marti","Miercuri","Joi","Vineri","Sambata"];
	var judet = ["","Alba","Arad","Argeș","Bacău","Bihor","Bistrița-Năsăud","Botoșani","Brașov","Brăila","Buzău","Caraș-Severin","Cluj","Constanța","Covasna","Dâmbovița","Dolj","Galați","Gorj","Harghita","Hunedoara","Ialomița","Iași","Ilfov","Maramureș","Mehedinți","Mureș","Neamț","Olt","Prahova","Satu Mare","Sălaj","Sibiu","Suceava","Teleorman","Timiș","Tulcea","Vaslui","Vâlcea","Vrancea","București","București Sector 1","București Sector 2","București Sector 3","București Sector 4","București Sector 5","București Sector 6","Călărași","Giurgiu"];		
	var cnp = $( this ).val();
	$("#test").text(cnp.length);
	if ($( this ).val().length > 13) {
		$( "#cnp" ).val(cnp.substring(0,13));
	};
	if($( this ).val().length == 13) {

			$("#box-test").show();
			$("#form").css("opacity","0.2");
			$("#prim").css("padding-top","10vh");
			$("#oferta").show();

			//Valoare de control

  			var control = ((cnp.substring(0,1)*2)+(cnp.substring(1,2)*7)+(cnp.substring(2,3)*9)+(cnp.substring(3,4)*1)+(cnp.substring(4,5)*4)+(cnp.substring(5,6)*6)+(cnp.substring(6,7)*3)+(cnp.substring(7,8)*5)+(cnp.substring(8,9)*8)+(cnp.substring(9,10)*2)+(cnp.substring(10,11)*7)+(cnp.substring(11,12)*9) )% 11;
  			 																																									
  			if (control == cnp.substring(12,13)){

  				$("#linie-validare").css("background-color","green");
  				$("#valid").html("<span class='label label-success'>Valid</span>");
  				
  			}	
  			else {
  				$("#linie-validare").css("background-color","red");
  				$("#valid").html("<span class='label label-danger'>Invalid [X]</span><br><br>Cifra de Control este gresita");
  				console.log("cifra de control trebuie sa fie " + control);
  				
  			}	

			//sex

			$("#sex").html( (cnp.substring(0,1) % 2 == 0 && cnp.substring(0,1) != 9)? "Femeie" : "Barbat" );


			//An nastere
			if (cnp.substring(0,1) < 3){
				$("#an-nastere").text("19"+ cnp.substring(1,3) +" / " + cnp.substring(3,5) +" / "+ cnp.substring(5,7) );
				var an = 19 + cnp.substring(1,3);
			}
			else if(cnp.substring(0,1) < 5){
				$("#an-nastere").text("18"+ cnp.substring(1,3));
				var an = 18 + cnp.substring(1,3);
			}
			else if(cnp.substring(0,1) < 7){
				$("#an-nastere").text("20"+ cnp.substring(1,3));
				var an = 20 + cnp.substring(1,3);
			}	
			else {
				$("#an-nastere").text("Persoana nu este nascuta in romania");
				var an = 20 + cnp.substring(1,3);
			}
			//luna
			$("#luna-nastere").text(luna[cnp.substring(3,5) * 1]);

			if(cnp.substring(3,5) == 00 || cnp.substring(3,5) > 12){
				$("#horror").hide();
			}			

			//zi
			var dateA = cnp.substring(3,5) + " " + cnp.substring(5,7) + " "+ an ; 
			var d = new Date(dateA);
			$("#zi-nastere").text(zi[d.getDay()]);

			//judetnaster

			$("#judet-nastere").text(judet[cnp.substring(7,9)*1]);

			//Varsta
    		var ani  = Math.floor(new Date(new Date() - d)/1000/60/60/24/365);
  			$("#ani").text(ani);
  			$("#major").text((ani < 18) ? "(Minor)":"(Major)");																																						
  			 
  			 

  			//sex-fix
			if (cnp.substring(0,1)>6 && cnp.substring(0,1) != 9){
				$("#valid").html("<span class='label label-warning'>Cetatean Strain rezident in Romania </span>");
				$("#varstaB, #varsta").hide();
				$("#judet-resedintaB, #judet-resedinta").show();

			}

			if (cnp.substring(0,1) == 9){
				$("#valid").html("<span class='label label-default'>Cetatean Strain </span>");
				$("#varstaB, #varsta, #sexB, #sex").hide();
				$("#judet-resedintaB, #judet-resedinta").show();
			}
			
			document.title = cnp + " Validator";																																			
	}	
});
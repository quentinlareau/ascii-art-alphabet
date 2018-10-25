//array alphabet

var A_array = [" ###   ", "#   #  ", "#####  ", "#   #  ", "#   #  "];

var B_array = ["####   ", "#   #  ", "####   ", "#   #  ", "####   "];

var C_array = [" ####  ", "#      ", "#      ", "#      ", " ####  "];

var D_array = ["####   ", "#   #  ", "#   #  ", "#   #  ", "####   "];

var E_array = ["#####  ", "#      ", "####   ", "#      ", "#####  "];

var F_array = ["#####  ", "#      ", "####   ", "#      ", "#      "];

var G_array = [" ###   ", "#      ", "#  ##  ", "#   #  ", " ###   "];

var H_array = ["#   #  ", "#   #  ", "#####  ", "#   #  ", "#   #  "];

var I_array = ["#  ", "#  ", "#  ", "#  ", "#  "];

var J_array = ["    #  ", "    #  ", "    #  ", "#   #  ", " ###   "];

var K_array = ["#  #  ", "# #   ", "##    ", "# #   ", "#  #  "];

var L_array = ["#      ", "#      ", "#      ", "#      ", "#####  "];

var M_array = ["#     #  ", "##   ##  ", "# # # #  ", "#  #  #  ", "#     #  "];

var N_array = ["#   #  ", "##  #  ", "# # #  ", "#  ##  ", "#   #  "];

var O_array = [" ###   ", "#   #  ", "#   #  ", "#   #  ", " ###   "];

var P_array = ["####   ", "#   #  ", "####   ", "#      ", "#      "];

var Q_array = [" ####   ", "#    #  ", "#  # #  ", "#   #   ", " ### #  "];

var R_array = ["####   ", "#   #  ", "####   ", "#  #   ", "#   #  "];

var S_array = [" ####  ", "#      ", " ###   ", "    #  ", "####   "];

var T_array = ["#####  ", "  #    ", "  #    ", "  #    ", "  #    "];

var U_array = ["#   #  ", "#   #  ", "#   #  ", "#   #  ", " ###   "];

var V_array = ["#   #  ", "#   #  ", "#   #  ", " # #   ", "  #    "];

var W_array = ["#       #  ", "#       #  ", "#   #   #  ", " # # # #   ", "  #   #    "];

var X_array = ["#   #  ", " # #   ", "  #    ", " # #   ", "#   #  "];

var Y_array = ["#   #  ", " # #   ", "  #    ", "  #    ", "  #    "];

var Z_array = ["#####  ", "   #   ", "  #    ", " #     ", "#####  "];





//input

var str = process.argv[2];

for (let j = 0; j < str.length; j++) {  
	

	var letter = str.charAt(j);


	if (letter=="a") {var array = A_array;	
	} 

	else if (letter=="b") {var array = B_array;	
	} 

	else if (letter=="c") {var array = C_array;	
	} 

	else if (letter=="d") {var array = D_array;	
	} 

	else if (letter=="e") {var array = E_array;	
	} 

	else if (letter=="f") {var array = F_array;	
	} 

	else if (letter=="g") {var array = G_array;	
	} 

	else if (letter=="h") {var array = H_array;	
	} 

	else if (letter=="i") {var array = I_array;	
	} 

	else if (letter=="j") {var array = J_array;	
	} 

	else if (letter=="k") {var array = K_array;	
	} 

	else if (letter=="l") {var array = L_array;	
	} 

	else if (letter=="m") {var array = M_array;	
	} 

	else if (letter=="n") {var array = N_array;	
	} 

	else if (letter=="o") {var array = O_array;	
	} 

	else if (letter=="p") {var array = P_array;	
	} 

	else if (letter=="q") {var array = Q_array;	
	} 

	else if (letter=="r") {var array = R_array;	
	} 

	else if (letter=="s") {var array = S_array;	
	} 

	else if (letter=="t") {var array = T_array;	
	} 

	else if (letter=="u") {var array = U_array;	
	} 

	else if (letter=="v") {var array = V_array;	
	} 

	else if (letter=="w") {var array = W_array;	
	} 

	else if (letter=="x") {var array = X_array;	
	} 

	else if (letter=="y") {var array = Y_array;	
	} 

	else if (letter=="z") {var array = Z_array;	
	} 
 
 for (var x=0; x<5; x++) {console.log(array[x]);
}}

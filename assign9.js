//Given the shirt size code "S", "M", "L", "XL" print the corresponding names "Small", "Medium", "Large", "Extra Large", "None" (For not a valid code)

const Letter = "s" ;
if (Letter == "S" || Letter == "s") 
   console.log("small")

else if (Letter == "M" || Letter == "m")
    console.log("Medium")

else if (Letter == "L" || Letter == "l")
    console.log("Large")

else if (Letter == "XL" || Letter == "xl")
    console.log("Extra Large")    
else
    console.log("None")
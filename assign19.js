//Given a sentence print the count of words (Separated by a space character)

var x = "Coding is Easy ";
var c = 0;
for(let i = 1; i <= x.length; i++){
    if(x[i] == " ")
    c++ ;
}
console.log(c);

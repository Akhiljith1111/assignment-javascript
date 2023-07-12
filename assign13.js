//Given a string print all the consonants not a,e,i,o,u using for loop.


var s = "This is a test Statement";
let c, i;
for (i=0; i<=s.length-1; i++){
  c = s[i] ;
  if (c=="a"|| c=="e" || c=="i" || c=="o" || c=="u" ||
  c=="A"|| c=="E"|| c=="I" || c=="O" || c=="U"){
  console.log(c)
  }
}



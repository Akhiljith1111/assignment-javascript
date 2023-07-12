//Given a string print the odd indexes of that string using for loop

var str = "JavaScript";
for(let i=0; i<str.length; i++){
  if(i%2!==1){
    console.log(str[i]);
  }
}

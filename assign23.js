//Given a 2d Array print the difference between first and second diagonals sum 

var a=[[1,2,3],[4,5,6],[7,8,9]];
var b=0;
var c=0;
var j
for(let i=0;i<a.length;i++){
        b=b+a[i][i];   
    }
for(let k=0;k<a.length;k++) {
        j=(a[k].length-k-1);
        c=c+a[k][j];
    }
console.log('First diagonal:', b);
console.log('Second diagonal:',c);
console.log(b-c);
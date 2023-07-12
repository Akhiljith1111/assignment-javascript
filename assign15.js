//Given a Pincode validate it with the below conditions
//It should be length of 6
//It should start with 5
//There should be at least one zero

var pin='585043';

var flag=0;

if(pin.length==6 && pin[0]=='5')
    {
    for(let i=0;i<pin.length;i++)
        {
        if(pin[i]=='0')
            flag=1; 
        }
    if(flag==1)
        console.log("valid"); 
    else{
        console.log('Invalid')
    }
    }
else
    console.log('Invalid'); 


let num = 11;
let count = 0;
for(let i=2; i<num; i++){
    if(num%i==0)
        count++;
}
if(count>0)
    console.log(num+' Number is not prime');
else
    console.log(num+' Number is prime');
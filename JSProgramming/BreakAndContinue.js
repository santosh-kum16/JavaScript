const scores=[50,30,30,60,100,3,45,25];
for(let i=0;i<scores.length;i++)
{
    if(scores[i]===30||scores[i]===50)
    {
        console.log('Continue Executed, index of i= '+i+' Value at Index='+scores[i]);
        continue;
    } 

    console.log("your score is: ",scores[i]);
    if(scores[i]===100)
    {
        console.log('Congrats you got the result!!');
        break;
    }
}
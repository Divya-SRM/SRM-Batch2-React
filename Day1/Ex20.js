
function sum(a,...b)
{
    let sum1=0;
    for(let i=0;i<b.length;i++)
    {
    sum1=sum1+b[i];
    }
    sum1=sum1+a
    return sum1;
}
console.log(sum(10,20,30,40,50)); 
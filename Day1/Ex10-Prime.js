const num=[3,4,5,6,7,8,9,10];
for(let i=0;i<num.length;i++)
{
    number=num[i];
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } 
}
}
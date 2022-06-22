/***/
//Codewars - 7kata - count the divisors of a number
// Converted js to ts 

function getDivisor(n:number) {
    let num = 0;
    for(let i = 0; i <= n; i++) {
        if(n % i == 0) {
            num ++;
        }
    }
    return num;
}
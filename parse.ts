//Codewars - 7kata - wovel-count
// Converted js to ts 

function getCount(str:string):number {
    let vowelsCount = 0;
    const vowels = ['a','e','i','o','u'];
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}
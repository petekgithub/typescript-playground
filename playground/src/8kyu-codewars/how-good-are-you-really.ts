
// a: accumulator
// b: currentvalue

function betterThanAverage(classPoints:number[],yourPoints:number):boolean {
    return yourPoints > classPoints.reduce((a,b) => a+b, 0) / classPoints.length;
}
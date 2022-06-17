//Codewars - 7kata - wovel-count
// Converted js to ts 
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

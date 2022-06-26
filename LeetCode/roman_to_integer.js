/**
 * https://leetcode.com/problems/roman-to-integer/
 *
 * @param {string} s
 * @return {number}
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II.
 * The number 27 is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
 * Instead, the number four is written as IV. Because the one is before the five we subtract it making four.
 * The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
 *
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given a roman numeral, convert it to an integer.
 *
 *
 * Constraints
 * 1 <= s.length <= 15
 * s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */


var romanToInt = function(s) {
    // Create map of roman numerals and their corresponding values
    let map = new Map();
    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);

    let num = 0

    // count each roman numeral as normal
    for(let i = s.length-1; i >= 0; i--){
        // According to the description above we need to handle small roman numerals that come before larger ones
        // so here we check if the roman numeral preceding the current one is LESS than it
        if(map.get(s[i]) >  map.get(s[i-1])){
            // We Add the difference between the two roman numerals. EX: "IV" is 4 instead of 6
            num += (map.get(s[i])-map.get(s[i-1]))
            // Move the iterator an extra space to avoid looping over the same letter
            i--
        } else {
            // If the roman numeral is NOT larger than the preceding roman numeral just add it as normal
            num += map.get(s[i])
        }
    }
    return num
};



const metaData = [
    {
        str: "III",
        output: 3
    },
    {
        str: "LVIII",
        output: 58
    },
    {
        str: "MCMXCIV",
        output: 1994
    }
]

for(const data of metaData){
    console.log(romanToInt(data.str))
}
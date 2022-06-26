/**
 *
 * https://leetcode.com/problems/plus-one/
 *
 *
 * @param {number[]} digits
 * @return {number[]}
 *
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the
 * integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 *
 * Constraints:
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 * digits does not contain any leading 0's.
 *
 * TODO: Couldn't quite figure this one out unfortunately so borrowed two solutions to understand.
 * TODO: BigInt threw me off
 */
var plusOne = function(digits) {
    let arr = digits.join("")
    let increment = BigInt(arr) + 1n
    return Array.from(String(increment), Number);

    /*
    for(var i = digits.length - 1; i >= 0; i--){
     digits[i]++;
    if(digits[i] > 9){
        digits[i] = 0;
    }else{
        return digits;
    }
    }
    digits.unshift(1);
    return digits;
     */
};

const metaData = [
    // {
    //     digits: [1,2,3],
    //     output: [1,2,4]
    // },
    // {
    //     digits: [4,3,2,1],
    //     output: [4,3,2,2]
    // },
    // {
    //     digits: [9],
    //     output: [1,0]
    // },
    {
        digits: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3],
        output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
    }
]

for(let data of metaData){
    console.log(plusOne(data.digits))
}
/**
 *
 * https://leetcode.com/problems/sqrtx/
 *
 * @param {number} x
 * @return {number}
 *
 * Given a non-negative integer x, compute and return the square root of x.
 * Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 * Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
 */
var mySqrt = function(x) {
    if(x === 1) return 1
    let left = 1;
    let right = Math.floor(x/2 + 1)
    let mid = null

    while(left <= right){
        mid = Math.floor((left+right)/2)

        if((mid*mid) > x){
            right = mid - 1
        } else if ((mid*mid) < x){
            left = mid + 1
        } else {
            return mid
        }
    }
    // if there is no sqrt return right
    return right

};


const metaData = [
    {
        x: 4,
        expected: 2
    },
    {
        x: 8,
        expected: 2
    },
    {
        x: 3,
        expected: 1
    },
]

for(let data of metaData){
    console.log(mySqrt(data.x))
}
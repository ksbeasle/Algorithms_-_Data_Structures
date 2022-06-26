/* --- sliding window pattern with a mix of recursion ---
    Write a function called minSubArrayLen, which accepts two parameters
    an array, and a positive integer. This function should return the minimal length
    of a contiguous subarray of which the sum is greater than or equal to the integer passed to
    the function, if there isn't one return 0
 */


const minSubArrayLen = (arr, num, size=1) => {
    if(size === arr.length) return 0
    let target = 0

    // Get target based on "window size" (size)
    for(let i = 0; i < size; i++){
        target += arr[i]
    }

    // slide window checking if the target is greater than or equal to num
    for(let i = size; i < arr.length; i++){
        target = target - arr[i-size] + arr[i]
        if(target >= num) return size
    }
    return minSubArrayLen(arr, num, size+1)
}

module.exports = { minSubArrayLen }

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) // 0
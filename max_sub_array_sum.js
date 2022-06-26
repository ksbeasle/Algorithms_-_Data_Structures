/* --- Sliding window pattern ---
    Given an array of integers and a number, write a function call maxSubarraySum,
    which finds the maximum sum of a subarray with the length of the number passed to
    the function. Note that a subarray must consist of consecutive elements from the original
    array. In the first example below, [100,200,300] is a subarray of the original array
    but [100,300] is not.
 */


const maxSubarraySum = (arr, windowSize) => {
    if(windowSize > arr.length) return null

    let max = 0

    for(let i = 0; i < windowSize; i++){
        max = max + arr[i]
    }

    let temp = max

    for(let i = windowSize; i < arr.length; i++){
        temp = temp - arr[i-windowSize] + arr[i]
        max = temp > max ? temp : max
    }
    return max
}

module.exports = { maxSubarraySum }

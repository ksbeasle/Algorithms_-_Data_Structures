/*
    Involves creating a window which can either be an array
    or number from one position to another. Depending on a certain
    condition, window either increases or closes (and a new window is created)
    Very useful for keeping track of a subset of data in an array or string
 */


const maxSubArraySum = (arr, num) => {
    if (arr.length < num) return null

    let max = 0
    let temp = 0

    // Grab the first max by starting at 0 and up to the num passed in
    for(let i = 0; i < num; i++){
        max += arr[i]
    }

    temp = max

    // start the loop at the num since we already did the first calculation at the top
    for(let i = num; i < arr.length; i++){
        // slide the window
        temp = temp - arr[i - num] + arr[i]
        max = Math.max(max, temp)
    }
    return max
}


// console.log(maxSubArraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4)) // 17
// console.log(maxSubArraySum([4,2,1,6], 1)) // 6
// console.log(maxSubArraySum([4,2,1,6,2], 4)) // 13
// console.log(maxSubArraySum([], 4)) // null


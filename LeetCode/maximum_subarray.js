/**
 * https://leetcode.com/problems/maximum-subarray/
 *
 *
 * @param {number[]} nums
 * @return {number}
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 *
 * Constraints:
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 */

var maxSubArray = function(nums) {
    if(nums.length === 0) return nums[0]

    // lets just set our max to the first index
    let max = nums[0]
    // this is the variable we will be doing computations on
    let currentSum = 0

    // Kind of like a sliding window but not quite

    for(let i = 0; i < nums.length; i++){
        // If at any point we get a negative value we will reset it to 0, (this is the sliding part technically)
        // by setting it to 0 we give ourselves a chance to take in more positive MAX values
        if(currentSum < 0){
            currentSum = 0
        }
        // compute new value
        currentSum+= nums[i]

        // Update max -- Will always choose the biggest number we have computed thus far
        max = Math.max(max, currentSum)
    }
    return max
}

// console.log(getSum([1,2,3,4]))

const metaData = [
    {
        nums: [-2,1,-3,4,-1,2,1,-5,4],
        output: 6
    },
    {
        nums: [1],
        output: 1
    },
    {
        nums: [5,4,-1,7,8],
        output: 23
    }
]

for(const data of metaData){
    console.log(maxSubArray(data.nums))
}
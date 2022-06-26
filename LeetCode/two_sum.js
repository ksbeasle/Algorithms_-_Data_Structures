/**
 * https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Time complexity: O(n) just need one pass
 * space complexity: O(n) its possible we will add every single element into the map
 */
 var two_sum = function(nums, target) {
     // Create map
     let map = new Map()

    for(let i = 0; i < nums.length; i++){
        // Get the difference of the target and current elements we are iterating over
        let diff = target-nums[i]

        // If the map has the difference value (key) then we have the solution!
        if(map.has(diff)){
            // return the map keys value (which is the index in this case) and i the current index that got the match
            return [map.get(diff), i]
        } else {
            // If no key is found we will add the key (nums[i]) and its value (index) for later use
            map.set(nums[i], i)
        }
    }
};

const testData = [
    {
        nums: [2,7,11,15],
        target: 9
    },
    {
        nums: [3,2,4],
        target: 6
    },
    {
        nums: [3,3],
        target: 6
    }
]


for(let i = 0; i < testData.length; i++){
    console.log(two_sum(testData[i].nums, testData[i].target))
}
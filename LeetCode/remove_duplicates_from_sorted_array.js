/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * @param {number[]} nums
 * @return {number}
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 * Return k after placing the final result in the first k slots of nums.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Constraints:
 * 1 <= nums.length <= 3 * 104
 * -100 <= nums[i] <= 100
 * nums is sorted in non-decreasing order.
 */
var removeDuplicates = function(nums) {
    // create our pointers
    let leftPtr = 0
    let rightPtr = 1

    //while the rightPtr is not at the end of the array of nums
    while(rightPtr < nums.length){

        // if the current leftPtr index and rightPtr index have the same value we will splice that value out
        if(nums[leftPtr] === nums[rightPtr]) {
            // here we splice the left most value so that leftPtr will get rightPtr's value and rightPtr will get a new
            // value to check in the next iteration, we also set the second param in splice to 1 to avoid deleting too
            // many elements
            nums.splice(leftPtr, 1)
        } else {
            // if there is no dupe/match we increment both pointers up 1
            leftPtr++
            rightPtr++
        }
    }
    return nums.length
};




const metaData = [
    {
        nums: [1,1,2],
        expect: 2 // [1,2]
    },
    {
        nums: [0,0,1,1,1,2,2,3,3,4],
        expect: 5 // [0,1,2,3,4]
    },
    {
        nums: [0,0,1,1,1,2,2,3,3,4],
        expect: 5 // [0,1,2,3,4]
    },
]



for(let data of metaData){
    console.log(removeDuplicates(data.nums))
}
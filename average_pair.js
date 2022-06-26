/* --- Multiple pointer pattern ---
    Write a function called averagePair. Given a sorted array of integers and a target average
    determine if there is a pair of values in the array where the average pair equals the target average.
    There may be more than one pair that matches the target
 */

const averagePair = (arr, target) => {
    if (arr.length === 0) return false
    let leftPtr = 0
    let rightPtr = arr.length - 1


    while(leftPtr < rightPtr){
        let sum = (arr[leftPtr] + arr[rightPtr]) / 2

        if(sum === target) return true

        if(sum > target){
            rightPtr--
        } else {
            leftPtr++
        }
    }
    return false
}

module.exports = { averagePair }

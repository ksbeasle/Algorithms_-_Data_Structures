/*
    Creating pointers or values that correspond to an index or position
    and move towards the beginning, end or middle based on a certain condition
    Very efficient for solving problems with minimal space complexity as well
 */

const sumZero = (arr) => {
    if (arr.length === 0) return undefined
    let leftPtr = 0
    let rightPtr = arr.length-1

    // using < instead of <= so we ignore a false positive of [0,0] === 0
    while (leftPtr < rightPtr){
        let sum = arr[leftPtr] + arr[rightPtr]

        if (sum === 0){
            return [arr[leftPtr], arr[rightPtr]]
            // if sum is greater than 0 we want to decrement to decrease the total sum to get closer to 0 (our target value)
        } else if (sum > 0){
            rightPtr--
        } else {
            leftPtr++
        }
    }
    return undefined
}


console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3, 3]
console.log(sumZero([-4,-3,-2,-1,0,5,10])) // undefined

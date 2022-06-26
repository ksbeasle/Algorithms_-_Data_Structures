// Using multiple pointers pattern

/*
    Implement a function called countUniqueValues, which accepts a sorted array
    and counts the unique values in the array. There can be negative numbers in the array but will
    always be sorted
 */

const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0
    let leftPtr = 0
    let rightPtr = 1
    let uniqueCounter = 1

    while (rightPtr < arr.length){
        if(arr[leftPtr] !== arr[rightPtr]){
            uniqueCounter++
        }
        leftPtr++
        rightPtr++
    }
    return uniqueCounter
}

module.exports = { countUniqueValues }

console.log(countUniqueValues([2,3,4,5,6,6,6])) // 5
/*
    Only works on sorted arrays
 */

const binarySearch = (arr, value) => {
    // Just check for edge case - length 1 array and possible that the value is there
    // if not return -1
    if(arr.length === 1 && arr[0] === value) {
        return 0
    } else if(arr.length === 1) {
        return -1
    }

    // Create pointers - left (beginning), mid (middle of array), right (end of array)
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor(((left+right) / 2))

    // another edge case check -- value could be left, mid or right :D
    if(arr[left] === value) return left
    if(arr[mid] === value) return mid
    if(arr[right] === value) return right

    // another edge case -- value is less than or greater than the beginning or end of array
    if(value < arr[left]) return -1
    if(value > arr[right]) return -1

    // while left index is BEFORE the right index
    while(left <= right){
        console.log(`Start:${left} -- Middle: ${mid} -- End:${right}`)
        // check if new mid is the value
        if(arr[mid] === value) return mid

        // if value is TOO SMALL bring right ptr DOWN
        if(value < arr[mid]){
            console.log(`${value} is less than ${arr[mid]}. Bring end down.`)
            right = mid-1
        } else {
            // ELSE value is TOO LARGE bring left ptr UP
            console.log(`${value} is more than ${arr[mid]}. Bring start up.`)
            left = mid+1
        }
        mid = Math.floor((left+right)/2)
    }
    return -1
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 1)) // 0
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5)) // 4
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 10)) // 9

console.log(binarySearch([1,2,3,5], 4)) // -1
console.log(binarySearch([1,2,3,4,5], 3)) // 2
console.log(binarySearch([1,2,3,4,5], 5)) // 4
console.log(binarySearch([1,2,3,4,5], 6)) // -1
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10)) // 2
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95)) // 16
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100)) // -1
/*
    This pattern involves dividing a data set into smaller chunks
    and then repeating a process with that subset of data. This process can
    tremendously decrease time complexity
 */

/*
 Given a sorted array of integers write a function called search that accepts
 a value and returns the index where the value passed to the function is located.
 return -1 if not found
 */
const search = (arr, target) => {
    // check if target is out of the range of values since array is sorted
    if(target < arr[0] || target > arr[arr.length-1]) return -1

    let min = 0
    let max = arr.length-1


    while(min <= max){
        let mid = Math.floor((min+max)/2)
        //let currentElement = arr[mid]

        // the target is on the right ELSE its on the left
        if(arr[mid] < target) {
            // set min to mid and increment it by 1
            min = mid + 1
        } else if (arr[mid] > target) {
            max = mid - 1
        } else {
            return mid
        }

    }
}


console.log(search([1,2,3,4,5,6], 4)) // 3
console.log(search([1,2,3,4,5,6], 6)) // 5
console.log(search([1,2,3,4,5,6], 11)) // -1
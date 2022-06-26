/*
    Write a recursive function called flatten() which accepts an array of arrays and returns a new array
    with flattened values.
 */



const flatten = (arr, flattenedArr=[]) => {
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            // return flatten(arr[i], flattenedArr)
            flattenedArr = flattenedArr.concat(flatten(arr[i]))
        } else {
             flattenedArr.push(arr[i])
        }
    }
    return flattenedArr
}


console.log(flatten([1, 2, 3, [4, 5] ])) // [1,2,3,4,5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1,2,3,4,5]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
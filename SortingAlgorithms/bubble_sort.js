/*
    Not the fastest, not used often.
    VERY GOOD for
 */


const swap = (arr, i, j) => {

}


const bubbleSort = (arr) => {
    let swap = false // prevents continuing looping if array is already sorted
    //Start at the end of the array -- this will prevent too many iterations
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            // console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                // swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swap = true
            }
        }
        if(swap) break
    }
    return arr
}

console.log(bubbleSort([54,2,24,62,9,0,12]))
console.log(bubbleSort([8,1,2,3,4,5,6,7]))
/*

 */


const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let min = arr[i]
        // letting i===j so that we can ignore the previous index that is already the smallest value
        for(let j = i; j < arr.length; j++){
            //console.log(arr[i], arr[j])
            if(min > arr[j]){
                min = arr[j]
            }
            if(min !== arr[i]){
                arr[j] = arr[i]
                arr[i] = min
            }
        }
    }
    return arr
}



console.log(selectionSort([3,15,6,7,2,0,-1]))
console.log(selectionSort([34,22,10,19,17]))
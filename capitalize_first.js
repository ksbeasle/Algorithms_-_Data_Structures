/*
    Write a recursive function called capitalizeFirst().
    Given an array of strings, capitalize the first letter of each string in the array.
 */


const MySolutionNoRecursion = (arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase().concat(arr[i].slice(1))
    }
    return arr
}

function capitalizeFirst (array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
}

console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']
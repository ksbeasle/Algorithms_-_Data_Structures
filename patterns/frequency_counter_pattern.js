/*
    Uses objects, sets, collect values/frequencies of values
    This can often avoid the need for nested 'for' loops O(n^2) operations with arrays and strings
 */

// 3N -> O(N)
const same = (a,b) => {
    if (a.length !== b.length) return false

    let freqCntr1 = {}
    let freqCntr2 = {}

    // Fill first object with values and their frequencies
    for(let val of a){
        freqCntr1[val] = (freqCntr1[val] || 0) + 1
    }
    // Fill second object with values and their frequencies
    for(let val of b){
        freqCntr2[val] = (freqCntr2[val] || 0) + 1
    }
    // console.log(freqCntr1)
    // console.log(freqCntr2)
    // Check
    for(let key in freqCntr1){
        // If the key in freqCntr1 squared does NOT EXIST in freqCntr2 then return false
        if( !(key ** 2 in freqCntr2)){
            console.log('No key found')
            return false
        }
        // If the amount of occurrences of that key in freqCntr1 do not match the occurrences in freqCntr2 return false
        if( freqCntr1[key] !== freqCntr2[key**2]){
            console.log('Invalid occurrences')
            return false
        }
    }
    return true
}

console.log(same([1,2,3,2,5], [9,1,4,4,11])) // false
console.log(same([1,2,3,2,5], [9,1,4,3,11])) // false
console.log(same([1,2,3,2,5], [9,1,4,4,25])) // true
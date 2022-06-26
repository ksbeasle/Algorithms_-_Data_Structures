/*
    --- FREQUENCY_COUNTER_PATTERN ---
    Write a function called sameFrequency. Given two positive integers, find out if the two
    numbers have the same frequency of digits
    Time Complexity: O(n)
 */

const sameFrequencyMyTake = (a,b) => a.toString().split('').sort().join('') === b.toString().split('').sort().join('')

const sameFrequency = (a,b) => {
    if(a.toString().length !== b.toString().length) return false

    let map1 = {}
    let map2 = {}

    for(let i = 0; i < a.toString().length; i++){
        map1[a.toString()[i]] = (map1[a.toString()[i]] || 0) + 1
    }

    for(let i = 0; i < b.toString().length; i++){
        map2[b.toString()[i]] = (map2[b.toString()[i]] || 0) + 1
    }

    for(let key in map1){
        // Check if the map1[key] equals the map2[key] -- values/frequency should be the same
        if(!(map2[key] === map1[key])){
            return false
        }
    }
    return true
}

module.exports = { sameFrequency, sameFrequencyMyTake }

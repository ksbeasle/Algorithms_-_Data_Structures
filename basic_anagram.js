// Using the frequency counter pattern
/*
    Given two strings determine if the second string is an anagram
    of the first. An anagram is a word. phrase or name formed by rearranging
    the letters of another such as 'cinema' formed from 'iceman'
 */
const validAnagram = (a, b) => {
    if(a.length === 0 && b.length === 0) return true
    if(a.length !== b.length) return false

    let map1 = {}
    let map2 = {}

    // create map for first string
    for(let letter of a){
        map1[letter] = map1[letter] ? map1[letter] + 1  : 1
    }

    // create map for second string
    for(let letter of b){
        map2[letter] = map2[letter] ? map2[letter] + 1  : 1
    }

    // check if the key/value of map1 matches the same key/value of map2 if not return false
    for( let key in map1){
        if(map1[key] !== map2[key]) {
            return false
        }
    }
    return true
}

module.exports = { validAnagram }


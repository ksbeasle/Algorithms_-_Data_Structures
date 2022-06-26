/* ---Need to review this again ---
    Write a function called findLongestSubstring(string) which accepts a string and returns
    the length of the longest substring with all distinct characters
 */


// const findLongestSubstring = (str, prevStr="") => {
//     if(str === "") return 0
//     //if(prevStr.length > str.length) return prevStr.length
//     let currentLongest = prevStr
//     let longest = ""
//
//
//     // grab longest sub
//     for(let i = 0; i < str.length; i++){
//         if(!longest.includes(str[i])) {
//             longest+=str[i]
//         } else {
//             let a = longest.length > prevStr.length ? longest : prevStr
//             return findLongestSubstring(str.slice(i), a)
//         }
//     }
//     console.log(prevStr)
//     console.log(longest)
//     return longest.length > prevStr.length ? longest.length : prevStr.length
//}

const findLongestSubstring = (str, prevStr = "") => {

    let newStr = ""

    for(let i = 0; i < str.length; i++){
        if(!newStr.includes(str[i])){
            newStr += str[i]
        } else {
            let newLongest = newStr.length >= prevStr.length ? newStr : prevStr
            let newSubStr = str.slice(i)
            return findLongestSubstring(newSubStr, newLongest)
        }
    }
    console.log(newStr)
    console.log(prevStr)
    let val = newStr >= prevStr ? newStr.length : prevStr.length
    console.log(val)
    return newStr >= prevStr ? newStr.length+1 : prevStr.length+1

}

function findLongestSubstring1(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}

// console.log(findLongestSubstring("")) // 0
// console.log(findLongestSubstring("rithmschool")) // 7
console.log(findLongestSubstring1("thisisawesome")) // 6
// console.log(findLongestSubstring("thecatinthehat")) // 7
// console.log(findLongestSubstring("bbbbbb")) // 1
//console.log(findLongestSubstring("longestsubstring")) // 8
//console.log(findLongestSubstring("thisishowwedoit")) // 6




const solution = () => {
    return 1
}
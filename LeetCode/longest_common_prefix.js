/**
 * @param {string[]} strs
 * @return {string}
 *
 * Write a function to find the longest common PREFIX string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Constraints
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 */


var longestCommonPrefix = function(strs) {
    // Check edge case if the array is empty
    if(strs.length === 0) return "";

    // use the first word as the prefix
    let prefix = strs[0]
    // start that loop after index 0
    for(let i = 1; i < strs.length; i++){
        // while indexOf IS NOT 0, which means we have not found the full prefix
        // we will continue to chip away at prefix taking off a letter at a time at the end of that str
        // until we reach 0 which means we have a full prefix match
        while(strs[i].indexOf(prefix) !== 0){
            // console.log("prefix?", strs[i].indexOf(prefix))
            // here we basically pop the last letter off until indexOf returns 0
            prefix = prefix.substring(0, prefix.length-1)
        }
    }
    return prefix

};




const metaData = [
    {
        strs: ["flower","flow","flight"],
        output: "fl"
    },
    {
        strs: ["dog","racecar","car"],
        output: ""
    }
]

for(let data of metaData){
    console.log(longestCommonPrefix(data.strs))
}
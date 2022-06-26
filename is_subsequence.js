/*
    Write a function called isSubsequence() which takes two strings and checks whether the
    characters in the first string form a subsequence of the characters in the second string.
    In other words, the function should check whether the characters in the first string
    appear somewhere in the second string, WITHOUT THEIR ORDER CHANGING.
 */

const isSubsequence = (str1, str2) => {
    let str1Ptr = 0
    let str2Ptr = 0

    while (str2Ptr < str2.length){

        if(str1Ptr+1 === str1.length) return true

        if(str1[str1Ptr] === str2[str2Ptr]){
            str1Ptr++
            str2Ptr++
        } else {
            str2Ptr++
        }
    }
    return false
}

module.exports = { isSubsequence }

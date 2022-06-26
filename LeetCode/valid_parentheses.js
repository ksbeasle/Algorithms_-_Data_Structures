/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * *NOTE* In this case I got confused because I wasn't sure if they were going to be mismatch like -> {[]} where I
 * would check basically characters next to each other to match in that case above it would return false the way its
 * currently coded. In this particular leetcode it will always be next to its pair
 */
var isValid = function(s) {
    // if its empty its true
    if(s.length === 0) return true
    // if the first char is a closing then its false no possible pair
    if(s[0] === ")" || s[0] === "]" || s[0] === "}") return false

    let stack = []

    // loop through and push to stack
    for(let i = 0; i < s.length; i++){
        // only push openings
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            stack.push(s[i])
            // If there is a closing found pop the last char and see if its a pair, if not return false, else keep going
        } else if(s[i] === ")" && stack.pop() !== "("){
            return false
        } else if(s[i] === "]" && stack.pop() !== "["){
            return false
        } else if(s[i] === "}" && stack.pop() !== "{"){
            return false
        }
    }
    // if all pairs found we should have an empty "stack"
    return stack.length === 0
};


const metaData = [
    {
        s: "()",
        output: true
    },
    {
        s: "()[]{}",
        output: true
    },
    {
        s: "(]",
        output: false
    },

]



for(let data of metaData){
    console.log(isValid(data.s))
}
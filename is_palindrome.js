/* -- RECURSION
    Write a recursive function called isPalindrome() which returns true if the string passed to it is a palindrome
    (reads same forward and backward), otherwise return false.
 */


const isPalindrome = (word, original="", reversedWord="") => {
    if(original === "") original = word
    reversedWord += word.slice(word.length-1)
    if(word.length === 0) return original === reversedWord
    return  isPalindrome(word.slice(0,word.length-1), original, reversedWord)
}


console.log(isPalindrome("awesome")) // false
console.log(isPalindrome("foobar")) // false
console.log(isPalindrome("tacocat")) // true
console.log(isPalindrome("amanaplanacanalpanama")) // true
console.log(isPalindrome("amanaplanacanalpandemonium")) // false

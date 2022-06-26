/* --- RECURSION ---
    Write a recursive function called reverse which accepts a string and returns a string in reverse
 */

const reverse = (str, newStr="") => {
    newStr += str[str.length-1]
    if(str.length === 1) return newStr
    return reverse(str.slice(0, str.length-1), newStr)
}

console.log(reverse("awesome")) // emosewa
console.log(reverse("rithmschool")) // loohcsmhtir
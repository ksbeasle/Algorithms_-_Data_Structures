/* --- frequency pattern ---
    Implement a function called areThereDuplicates which accepts any number of arguments
    and checks whether there are any duplicates among the arguments passed in. You can solve
    this using the frequency counter pattern or the multiple pointers pattern

    Complexity: O(N)
    Space: O(N)
 */

const areThereDuplicatesMyTake = (...args) => {
    if(args.length === 1) return false

    let map = {}
    for(let i = 0; i < args.length; i++){
        if(map[args[i]]){
            return true
        } else {
            map[args[i]] = 1
        }
    }
    return false
}

module.exports = { areThereDuplicatesMyTake }


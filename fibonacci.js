/* -- recursion -- Had to check solution on this
    Write a function called fib which accepts a number and returns the nth number in the fibonacci sequence.
    Recall that the fibonacci sequence is the sequence  of the whole numbers 1,1,2,3,5,8...
    which starts with 1 and 1, and where every number thereafter is equal to the sum of the two
    previous numbers
 */


const fib = (num) => {
    if(num <= 2) return 1
    return fib(num-1) + fib(num-2)
}



console.log(fib(4)) // 3
console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465

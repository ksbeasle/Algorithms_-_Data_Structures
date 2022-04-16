
# BIG O NOTATION

![Image of Yaktocat](https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg)

<p>Runtime of an algorithm as the input grows.</p>

____

*   __Function__: Add each number you iterate over until you reach the target number passed in.

Function 1: ```O(n)```
```javascript
const addAllNumbers = (target) => {
    let total = 0;
    for(let i = 1; i <= target; i++){
        total += i;
    }
    return total;
}
```
Function 2: ```O(1) ```
```javascript
const addAllNumbers = (target) => {
    return target * (target+1) / 2;
}
```
* Which of the two functions is better?
    * Function 2
* Why?
    * There are 3 operations in function 2:``` multiplication, addition and division```
    * In function 1 there are n amount operations (```+```) alone inside the for loop. Not even including the (```=```) part of it or the (```++```) or the (```i <= n```)

___
# Simplifying Big O Notation

### Rules:
1. <b>Constants Don't matter</b>
    * O(2n) &rarr; O(n)
    * O(500) &rarr; O(1)
    * O(13n<sup>2</sup>) &rarr; O(n<sup>2</sup>)

<br>

2. <b>Smaller Terms don't matter</b>
    * O(n + 10) &rarr; O(n)
    * O(1000n + 50) &rarr; O(n)
    * O(n<sup>2</sup> + 5n + 8) &rarr; O(n<sup>2</sup>)

<br>

3. <b>Big O Shorthands</b>
    * Arithmetic operations are constant
    * Variable assignemtn is constant
    * Accessing elements in an ```array``` (by index) or ```object```(by key) is constant
    * In a loop the complexity is the length of the loop times the complexity of whatever hapepns inside of the loop

___
# Examples

```Javascript
const logAtLeast5 = (n) => {
    for (let i = 0; i <= Math.max(5,n); i++){
        console.log(i)
    }
}
```
Big O &rarr;  ```O(n)```
<p>Since we can provide a number greater than 5 this grows n times.</p>
<br>

```Javascript
const logAtMost5 = (n) => {
    for (let i = 0; i <= Math.min(5,n); i++){
        console.log(i)
    }
}
```
Big O &rarr; ```O(1)```
<p>We are basically capped off at 5 no matter how big a number n is.</p>

___
# Space Complexity
<p>Amount of memory an algorithm takes up.</p>

* Most primitive are constant space (```bool, numbers, undefined, null```)
* ```Strings``` require ```O(n)``` space
* Reference types are generally ```O(n)``` where n is the  length for arrays or number of keys for objects.
___
# Examples

```Javascript
const sum = (arr) => {
    let total = 0
    for (let i = 0; i <= arr.length; i++){
        total += arr[i]
    }
    return total
}
```
Space complexity &rarr;  ```O(1)```
<p>We only need two variables to actually allocate memory:</p>

```total``` &
```i```
<br>

```Javascript
const double = (arr) => {
    let newArr = []
    for (let i = 0; i <= arr.length; i++){
        newaArr.push(2 * arr[i])
    }
    return newArr
}
```
Space complexity &rarr;  ```O(n)```
<p>In this case we are trying to allocate memory for an array that will have the same size as the array passed in which could be any amount (n length):</p>

<br>
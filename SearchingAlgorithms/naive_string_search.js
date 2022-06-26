/*
    Loop over the longer string
    Loop over the shorter string
    If the characters don't match break out of the inner loop. If they do keep going, increment the count
    when you find a complete match

    Purposely coded this way. Assuming lowercase pattern and string
 */


const search = (str, pattern) => {
    let count = 0
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < pattern.length; j++){
           // console.log(str[i+j],pattern[j])
            // we want to look ahead which is why we do i+j
            if(str[i+j] !== pattern[j]) break
            // if we are able to loop all the way through j we have a complete match to our pattern
            if(j === (pattern.length-1) ) count++
        }
    }
    return count
}


console.log(search("wow omg wow zomgtworomg", "omg")) // 3
console.log(search("lorie loled", "lol")) // 1
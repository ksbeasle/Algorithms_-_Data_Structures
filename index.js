const validate = (val) => {
    if(val === 7777777) throw new Error("YOU DONE!")
}
const validateForLoop = (arr) => {
    for(obj of arr) {
        if(obj.code === 8888888) throw new Error("YUP")
    }
}

const validateWhile = (arr) => {
    var x = 0, l = arr.length;
    while (x < l) {
    if(arr[x].code === 9999999 ) throw new Error("WHILE")
    if(arr[x].id === 1234567 ) throw new Error("1234567")
    // if(arr[x].name === "tom" ) throw new Error("TOM YOU FUCKED UP")
  	x++;
}
}

const arr = []
for(let i = 0; i < 10000000; i++){
    arr.push(
        {
            code: i,
            id: i-10,
            name: "tom"
        }
    )
}

console.time()
try {
// const res = arr.map(obj =>validate(obj.code))
// const res1 = validateForLoop(arr)
const res2 = validateWhile(arr)
} catch (error) {
    console.error(error)
    console.log('got an err');
}
console.timeEnd()

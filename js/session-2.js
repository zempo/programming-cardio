// longest word 
const longestWord = (sen) => {
    // sort all words in sentence by length
    let output = sen.toLowerCase().split(' ').sort((a, b) => b.length - a.length)
    
    // longest word is either array of words or single word
    output = output.filter((word) => word.length === output[0].length)

    return output
}

const longestWord2 = (sen) => {
    let wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

    let sorted = wordArr.sort((a, b) => b.length - a.length)
    sorted = sorted.filter(word => word.length === sorted[0].length)

    return sorted
}

console.log(`Problem 1a: ${longestWord('something wicked this way comes')}`)
console.log(`Problem 1b: ${longestWord2('something something wicked way comes')}`)

// chunk an array into mini arrays of a particular length
const chunkArr = (arr, len) => {
let chunked = []
for (let i = 0; i < arr.length; i += len) { 
    chunked.push(arr.slice(i, len + i))
} 
console.log(chunked)
return `Array with ${chunked.length} slices of ${len}.`
}

const chunkArr2 = (arr, len) => {
    let chunked = []
    let i = 0
    while(i < arr.length) {
        chunked.push(arr.slice(i, len + i))
        i += len
    }
    console.log(chunked)
    return `Array with ${chunked.length} slices of ${len}.` 
}

const chunkArr3 = (arr, len) => {
    const chunked = []
    arr.forEach((val)=> {
        // get last element 
        const last = chunked[chunked.length - 1]
        // check if there is a last/undefined/last length is equal to the chunked len
        if (!last || last.length === len) {
            chunked.push([val])
        } else {
            last.push(val)
        }
    })

    console.log(chunked)
    return `${chunked.length} Subarrays of ${len}`
}

console.log(`Problem 2a: ${chunkArr([1, 33, 145, 122, 23, '34', true], 2)}`)
console.log(`Problem 2b: ${chunkArr2([1, 33, 145, 122, 23, '34', true], 1)}`)
console.log(`Problem 2c: ${chunkArr3([1, 33, 145, 122, 23, '34', true], 3)}`)


const revInt = x => {
    let num = x < 0 ? -x:x
    let reversed = 0

    while(num > 0) {
        reversed = reversed * 10 + (num % 10)
        num = Math.floor(num / 10)
    }
    return x < 0 ? -reversed:reversed
}

console.log(revInt(-345)) 

const flattenArrs = (arrs) => {
    return `[${arrs.reduce((a, b) => a.concat(b))}]`
}

const flattenArrs2 = (arrs) => {
    return `[${[].concat.apply([], arrs)}]`
}

console.log(`Problem 3a: ${flattenArrs([ [ 1, 33, 145 ], [ 122, 23, '34' ], [ true ] ])}`)
console.log(`Problem 3b: ${flattenArrs2([ [ 1, 33, 145 ], [ 122, 23, '34' ], [ true ] ])}`)

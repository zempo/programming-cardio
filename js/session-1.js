const revStr = (str) => {
    return str.split('').reverse().join('')
}

const revStr2 = (str) => {
    let output = ''
    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i]
    }
    return output
}

console.log(`Problem 1a: ${revStr('hello')}`)
console.log(`Problem 1b: ${revStr2('hello')}`)

const isPalindrome = (str) => {
    let output = true
    for (let i = 0; i < ((str.length - 1) / 2); i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            output = false
        }
    }
    return output
}  

const isPalindrome2 = (str) => {
    let reversed = str.split('').reverse().join('')
    return reversed === str
}

console.log(`Problem 2a: ${isPalindrome('racecar')}`)
console.log(`Problem 2b: ${isPalindrome2('racecars')}`)

const revInt = (x) => {
    let num = x < 0 ? -x : x
    let reversed = 0

    while(num > 0)  {
        reversed = reversed * 10 + (num % 10)
        num = Math.floor(num / 10)
    }
    return x < 0 ? -reversed: reversed
}

const revInt2 = x => {
    let rInt = x
    rInt = rInt.toString().split('').reverse().join('')

    return parseInt(rInt) * Math.sign(x)
}

console.log(`Problem 3a: ${revInt(-256)}`)
console.log(`Problem 3b: ${revInt2(-723)}`)

const capitalizeLetters = phrase => {
    let output = ''
    for (let i = 0; i < phrase.length; i++) {
        if (i === 0 || phrase[i - 1] === ' ') {
            output += phrase[i].toUpperCase()
        } else {
            output += phrase[i]
        }
    }
    return output
}

console.log(`Problem 4a: ${capitalizeLetters('i love javascript')}`)

const maxChar = str => {
    let charMap = new Map()
    let maxNum = 0
    let maxChar = 0

    for (const char of str) {
        charMap.set(char, charMap.get(char) + 1 || 1)
        if (charMap.get(char) > maxNum) {
            maxNum = charMap.get(char)
            maxChar = char
        }
    }
    return maxChar
}

const maxChar2 = str => {
    let charMap = {}
    let maxNum = 0
    let maxCh = ''

    str.split('').forEach(char => {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    })

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char]
            maxCh = char  
        } 
    }
    return maxCh
}

console.log(`Problem 5a: ${maxChar('javaaasscript')}`)
console.log(`Problem 5b: ${maxChar2('javaassssssscript')}`)


const fizzBuzz = () => {
    let output = []

    for (let i = 1; i < 100; i++) {
        if (i % 15 === 0) {
            output.push('fizzbuzz')
        } else if (i % 3 === 0) {
            output.push('fizz')
            
        } else if (i % 5 === 0) {
            output.push('buzz')

        } else {
            output.push(i)
        }
    } 
    return output

}

console.log(`Problem 6: ${fizzBuzz()}`)
// add all parameters (no arrays)
// has to be written as a function declaration -- function fxn() {} -- not a declared function const fxn = () => {}
function addParams() {
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

function addParams2() {
  let args = [...arguments].reduce((acc, cur) => acc + cur);
  return args;
}

function addParams3(...nums) {
  total = 0;
  nums.forEach(num => (total += num));
  return total;
  // return nums.reduce((acc, cur) => acc + cur)
}

console.log("Problem 1a:");
console.log(addParams(2, 67, 11, 2, -56, 4));
console.log("Problem 1b:");
console.log(addParams2(2, 67, 11, 2, -56, 4));
console.log("Problem 1c:");
console.log(addParams3(2, 67, 11, 2, -56, 4));

const checkForPrime = i => {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      return false;
    }
  }
  return true;
};

const sumPrimes = n => {
  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (checkForPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

console.log(`Problem 2a: ${sumPrimes(10)}`);

function seekNDestroy() {
  let arr = [...arguments].splice(0, 1)[0];
  let targets = [...arguments].splice(1);
  targets.forEach(target => (arr = arr.filter(el => el !== target)));
  return arr;
}

function seekNDestroy2(arr) {
  const args = Array.from(arguments);
  function filterArr(arr) {
    return args.indexOf(arr) === -1;
  }
  return arr.filter(filterArr);
}

function seekNDestroy3(arr, ...targets) {
  return arr.filter(val => !targets.includes(val));
}

console.log(`Problem 3a:`);
console.log(seekNDestroy([1, 3, 6, "hello", 7, 22, 11], 3, 7, 5));
console.log(`Problem 3b:`);
console.log(seekNDestroy2([1, 3, 6, "hello", 7, 22, 11], 3, 7, 5));
console.log(`Problem 3c:`);
console.log(seekNDestroy3([1, 3, 6, "hello", 7, 22, 11], 3, 7, 5));

// some people are standing in a row by the park. there are trees between them which cannot be moved
// rearrange the people by heights in a non-descending order without moving the trees
// ex.
// a = [-1, 150, -1, 160, 170, -1, -1, 160]
// a = [-1, 150, -1, 160, 160, -1, -1, 170]
function sortByHeight(arr) {
  // position indexes
  const arr1 = [];
  // store the values
  const arr2 = [];
  // push the tree indexes, and the values
  arr.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));
  // non-descending order values sort
  const sortArr = arr2.sort((a, b) => a - b);
  // loop through indexes, splice sorted array at each index
  arr1.forEach((val, i) => sortArr.splice(arr[i], 0, -1));
  return sortArr;
}

console.log(`Problem 4a:`);
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// given a string of alphabetized letters
// find which letter is missing in the string
// ex. abd ... missing c
function missingLetters(str) {
  // highest possible sum from actual gives us missing code
  // increment the compare to see if it equals compare
  // there will be an offset if it does not
  let compare = str.charCodeAt(0);
  let missing;
  str
    .split("")
    .map((char, i) =>
      str.charCodeAt(i) == compare
        ? ++compare
        : (missing = String.fromCharCode(compare))
    );
  return !str.includes("a") ? "a" : missing;
}

console.log(`Problem 5a:`);
console.log(missingLetters("abcdefghjklmno"));

function evenOddSums(arr) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even += arr[i];
    } else {
      odd += arr[i];
    }
  }
  return [even, odd];
}

console.log(`Problem 6a:`);
console.log(evenOddSums([50, 60, 60, 45, 71]));

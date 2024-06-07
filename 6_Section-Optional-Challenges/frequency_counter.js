/*
Write a function called sameFrequency. Given two positive integers,
find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:

Time: O(N)
*/

const sameFrequency = (num1, num2) => {
  const num1Str = num1.toString().split("");
  const num2Str = num2.toString().split("");
  if (num1Str.length !== num2Str.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const char of num1Str) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (const char of num2Str) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

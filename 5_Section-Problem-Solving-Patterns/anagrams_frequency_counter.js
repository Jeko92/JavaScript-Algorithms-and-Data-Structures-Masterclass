/*
Given two string, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as
cinema, formed from iceman
*/

const anagramChecker = (str1, str2) => {
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");
  if (str1.length !== str2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (char of str1Arr) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (char of str2Arr) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (const char in frequencyCounter1) {
    if (!(char in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[char] !== frequencyCounter1[char]) {
      return false;
    }
  }

  return true;
};

console.log(anagramChecker("aaz", "zaa"));
console.log(anagramChecker("aaz", "zza"));

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};

console.log(validAnagram("aaz", "zaa"));
console.log(validAnagram("aaz", "zza"));

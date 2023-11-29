## Steps to Problem Solving

### 1. Understand The Problem

- Restate the problem in own words
- What inputs go into problem
- What are desired outputs from problem
- Can Outputs be determined by the inputs (Is Information enough to solve a problem?)
- ow shoul important pieces of data be labeled

```js
Example:
// ===============================================================
// Write a function which takes two numbers and returns their sum
// ===============================================================

 // 1.Can I restate the problem in my own words?
     // -'implement addition'
 // 2.What are the inputs that go into the problem?
     // -ints?
     // -floats?
     // -what about string for large numbers?
 // 3.What are the outputs that should come from the solution to the problem?
     // -int? float? string?
 // 4.Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
     //
 // 5.How should I label the important pieces of data that are a part of the problem?
     // - function sumOfTwo? inputs-num1, num2?
```

### 2. Explore Examples

- Starting with Simple Examples
- Progress to More Complex Examples
- Explore Examples with Empty Inputs
- Explore Examples with Invalid Inputs

```js
// =============================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// =============================================================================================

//* First do Steps from 1-Understanding the problem

charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, 0:2}

("my phone number is 182763"); // do spaces count?
("Hello hi"); // are uppercase H and lowercase h same or different?

charCount(""); // what should be returned?
```

### 3. Breaking the problem Down

```js
// =============================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// =============================================================================================
charCount("aaaa");
/* {
    a:4
} */

charCount("hello");
/* {
    h:1,
    e:1,
    l:2,
    o:1
} */

charCount("Your PIN number is 1234!");
/* {
    1:1,
    2:1,
    3:1,
    4:1,
    b:1,
    e:1,
    i:2,
    m:1,
    n:2,
    o:1,
    p:1,
    r:2,
    s:1,
    u:2,
    y:1
} */

const charCount = (str) => {
  //do someThing
  // return an Object with keys that are lowercase alphanumeric characters in the string;
};

const charCount = (str) => {
  // make Object to return at end
  // loop over string, for each character...
  --// if the char is a number/letter AND key in Object, add one to count
  --// if the char is a number/letter AND not in Object, add it to Object and set value to 1
  --// if character is something else (space, period, etc.) don't do anything
  // return Object at end
};
```

### 4. Solve or Simplify

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

```js
const charCount = (str) => {
  // make Object to return at end
  let result = {}
  // loop over string, for each character...
  for(let i=0; i < str.length; i++){
    let char = str[i].toLowerCase();
    --// if the char is a number/letter AND key in Object, add one to count
    if(result[char] > 0){
        result[char]++;
    }
    --// if the char is a number/letter AND not in Object, add it to Object and set value to 1
    else{
    result[char] = 1;
    }
  }
  --// if character is something else (space, period, etc.) don't do anything

  // return Object at end
  return result;
};
```

### 5. Look Back and Refactor

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

```Javascript
    const charCount = (str) => {
      let result = {}
    //   for(let i=0; i < str.length; i++){
      for(let char of str){
        // char = str[i].toLowerCase();
        // char = char.toLowerCase();
        // if(/[a-z0-9]/.test(char)){
        if(isAlphanuNumeric(char)){
            char = char.toLowerCase();
            // if (result[char] > 0){
            //     result[char]++;
            // }else{
            //     result[char] = 1;
            // }
            obj[char] = ++obj[char] || 1;
        }
      }
      return result;
    };


    const isAlphaNumeric = (char) => {
      let code = char.charCodeAt(0);
      if(!(code > 47 && code <58) && // numeric (0-9)
         !(code > 64 && code <91) && // upper alpha (A-Z)
         !(code > 96 && code <123)){ // lower alpha (a-z)
           return false;
         }
         return true;
    };
```

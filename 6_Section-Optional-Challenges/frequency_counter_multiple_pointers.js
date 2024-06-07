/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
Restrictions:

Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/

const areThereDuplicates0 = () => {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
};

const areThereDuplicates = (...args) => {
  if (args.length === 0) return null;
  let sortedArgs = args.sort((a, b) => a - b);
  let start = 0;
  let next = 1;
  while (next < sortedArgs.length) {
    if (sortedArgs[start] === sortedArgs[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};

const areThereDuplicates1 = (...args) => new Set(args).size !== args.length;

const areThereDuplicates2 = function () {
  return new Set(arguments).size !== arguments.length;
};

console.log(areThereDuplicates0(1, 2, 3, 4, 1));
console.log(areThereDuplicates(1, 2, 3, 4, 1));
console.log(areThereDuplicates1(1, 2, 3, 4, 1));
console.log(areThereDuplicates2(1, 2, 3, 4, 1));
//[1,2,3,2,4,5]

const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

console.log(sum([1, 3, 5, 7, 9]));

/*
Space complexity of this approach is O(1)
*/

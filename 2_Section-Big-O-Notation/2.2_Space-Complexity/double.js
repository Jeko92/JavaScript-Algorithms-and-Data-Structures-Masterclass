const double = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};

console.log(double([1, 3, 5, 7, 9]));

/*
Space complexity of this approach is O(n)
*/

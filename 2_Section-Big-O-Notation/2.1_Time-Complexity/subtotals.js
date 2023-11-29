const subtotals = (array) => {
  let subtotalArray = Array(array.length);
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
};

const grades = [67, 52, 88, 100, 84, 78, 93, 98];

console.log(subtotals(grades));
/*
Big O of this approach is O(n * n)
 */

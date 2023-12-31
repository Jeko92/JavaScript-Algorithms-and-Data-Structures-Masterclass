const addUpTo = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};
// console.log(addUpTo(6));
// console.log(addUpTo(3));
// console.log(addUpTo(100));

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

/*
Big O of this approach is O(n)
 */

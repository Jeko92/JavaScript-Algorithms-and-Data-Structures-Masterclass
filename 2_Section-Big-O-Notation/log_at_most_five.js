const logAtMost = (n) => {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};

console.log(logAtMost(3));
console.log(logAtMost(7));
console.log(logAtMost(100));

/*
  Big O of this approach is O(1)
*/

const logAtLeast = (n) => {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

console.log(logAtLeast(3));
console.log(logAtLeast(7));

/*
Big O of this approach is O(n)
 */

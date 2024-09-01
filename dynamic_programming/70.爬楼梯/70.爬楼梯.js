// const climbStairs = function(n) {
//   console.log('n', n)
  
//   if (n <= 1) return 1
//   return climbStairs(n - 1) + climbStairs(n - 2)
// };

const climbStairs = function(n) {
  let p = 0, q = 0, r = 1

  for (let i = 1; i <= n; i++) {
      p = q
      q = r
      r = p + q
  }
  return r
}

console.log('climbStairs(2)', climbStairs(2));

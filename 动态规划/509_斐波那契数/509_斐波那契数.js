/**
 * 滚动数组解法求斐波那契数
 * @param {number} n 
 * @returns {number} r
 */
const fib = function(n) {
  let q = 0, p = 1, r = 1

  if (n <= 1) return n

  for (let i = 2; i < n; i++) {
      q = p
      p = r
      r = p + q
  }
  return r
};

/**
 * 动态规划方法求解斐波那契数
 * @param {number} n 
 * @returns dp[n]
 */
const fibDY = function(n) {
  const dp = new Array(n)
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
      if (i === 1) {
          dp[i] = 1
          continue
      }
      dp[i] = dp[i - 1] + dp[i - 2]
  }
  console.log('dp', dp)
  
  return dp[n]
};

console.log('fibDY(4)', fibDY(4))




/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = function(strs, m, n) {
  const len = strs.length
  const dp = Array.from({ length: len + 1 }, () => 
      Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  )

  const getZeroAndOne = str => {
      let zeros = 0, ones = 0

      for (let char of str) {
          if (char === '0') {
              zeros++
          } else {
              ones++
          }
      }

      return [zeros, ones]
  }

  for (let l = 1; l <= len; l++) {
      const str = strs[l - 1]
      const [zeros, ones] = getZeroAndOne(str)
      
      for (let j = 0; j <= m; j++) {
          for (let k = 0; k <= n; k++) {
              dp[l][j][k] = dp[l - 1][j][k]

              if (j >= zeros && k >= ones) {
                  dp[l][j][k] = Math.max(dp[l][j][k], dp[l - 1][j - zeros][k - ones] + 1)
              }
          }
      }
  }

  return dp[len][m][n]
};

const strs = ["10", "0001", "111001", "1", "0"],
  m = 5,
  n = 3;
console.log(findMaxForm(strs, m, n));

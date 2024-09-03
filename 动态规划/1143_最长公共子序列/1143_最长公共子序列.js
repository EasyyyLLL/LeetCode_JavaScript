const longestCommonSubsequence = function(text1, text2) {
  const n = text1.length
  const m = text2.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))

  // for (let i = 0; i < n; i++) {
  //     dp[i] = new Array(m)
  // }

  for (let i = 1; i <= n; i++) {
      const c1 = text1[i-1]

      for (let j = 1; j <= m; j++) {
          const c2 = text2[j-1]

          if (c1 === c2) {
              dp[i][j] = dp[i-1][j-1] + 1
          } else {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
          }
      }
  }
  console.log('dp', dp);
  return dp[n][m]
};

// const text1 = "ezupkr"
// const text2 = "ubmrapg"
const text1 = "abc"
const text2 = "def"
console.log(longestCommonSubsequence(text1, text2));


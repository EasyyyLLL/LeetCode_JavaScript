const uniquePaths = function(m, n) {
  const dp = new Array(m)
  for (let i = 0; i < m; i++) {
      dp[i] = new Array(n)
  }

  dp[0][0] = 0

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (i === 0) {
              dp[i][j] = 1
              continue
          }

          if (j === 0) {
              dp[i][j] = 1
              continue
          }

          dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
  }
  console.log('dp', dp);
  
  return dp[m - 1][n - 1]
};

console.log('uniquePaths(3, 7)', uniquePaths(3, 7));


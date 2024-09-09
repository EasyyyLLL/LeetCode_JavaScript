const numSquares = function(n) {
  const dp = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
      let minn = Number.MAX_VALUE

      for (let j = 1; j * j <= i; j++) {
          minn = Math.min(minn, dp[i - j * j])
      }

      dp[i] = minn + 1
  }

  return dp[n]
};
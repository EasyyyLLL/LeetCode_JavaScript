const minimumDeleteSum = function(s1, s2) {
  const len1 = s1.length
  const len2 = s2.length

  const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0))

  dp[0][1] = s2.charCodeAt(0)
  dp[1][0] = s1.charCodeAt(0)

  for (let j = 1; j < len2 + 1; j++) {
      dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1)
  }

  for (let i = 1; i < len1 + 1; i++) {
      dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1)
  }

  for (let i = 1; i < len1 + 1; i++) {
      for (let j = 1; j < len2 + 1; j++) {
          if (s1[i - 1] === s2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1]
              continue
          } else {
              dp[i][j] = Math.min(dp[i - 1][j] + s1.charCodeAt(i - 1), dp[i][j - 1] + s2.charCodeAt(j - 1))
          }
      }
  }

  return dp[len1][len2]
};
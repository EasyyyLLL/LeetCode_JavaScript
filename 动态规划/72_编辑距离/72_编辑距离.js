const minDistance = function(word1, word2) {
  const len1 = word1.length
  const len2 = word2.length

  const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0))

  for (let i = 0; i < len1 + 1; i++) {
      dp[i][0] = i
  }

  for (let j = 0; j < len2 + 1; j++) {
      dp[0][j] = j
  }
  
  
  for (let i = 1; i < len1 + 1; i++) {
      for (let j = 1; j < len2 + 1; j++) {
          const left = dp[i - 1][j] + 1
          const down = dp[i][j - 1] + 1
          let left_down = dp[i - 1][j - 1]

          if (word1[i - 1] != word2[j - 1]) {
              left_down = left_down + 1
          }
          dp[i][j] = Math.min(left, Math.min(left, down, left_down))
      }
  }

  return dp[len1][len2]
};
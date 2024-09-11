const wordBreak = function(s, wordDict) {
  const n = s.length
  const wordDictSet = new Set(wordDict)
  const dp = new Array(n + 1).fill(false)
  dp[0] = true

  for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
          if (dp[j] && wordDictSet.has(s.substr(j, i-j))) {
              dp[i] = true
              break
          }
      }
  }

  return dp[n]
};
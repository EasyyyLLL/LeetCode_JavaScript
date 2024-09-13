const change = function(amount, coins) {
  if (amount === 0) return 1

  const n = coins.length
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1

  for (let j = 0; j < n; j++) {
      const coin = coins[j]

      for (let i = coin; i <= amount; i++) {
          dp[i] = dp[i] + dp[i - coin]
      }
  }

  return dp[amount]
};
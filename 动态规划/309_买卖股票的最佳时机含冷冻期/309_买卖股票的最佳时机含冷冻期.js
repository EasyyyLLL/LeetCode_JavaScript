const maxProfit = function(prices) {
  const n = prices.length
  const dp = new Array(n).fill(0).map(() => new Array(3).fill(0))
  // 第一天买入股票
  dp[0][0] = -prices[0]

  for (let i = 1; i < n; i++) {
    // 持有
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
    // 卖出
    dp[i][1] = dp[i - 1][0] + prices[i]
    // 不持有
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1])
  }
  console.log('dp', dp);
  
  return Math.max(dp[n-1][1], dp[n-1][2])
};

let prices = [4,2,1];
console.log(maxProfit(prices));
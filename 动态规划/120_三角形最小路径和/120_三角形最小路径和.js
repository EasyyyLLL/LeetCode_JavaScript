const minimumTotal = function(triangle) {
  const n = triangle.length
  const dp = new Array(n).fill(0).map((item, index) => new Array(index + 1).fill(0))
  console.log('dp', dp);
  
  dp[0][0] = triangle[0][0]

  for (let i = 1; i < n; i++) {
      for (let j = 0; j <= i; j++) {
          if (j === i) {
              dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
              continue
          }

          if (j === 0) {
              dp[i][j] = dp[i - 1][0] + triangle[i][j]
              continue
          }
          dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
      }
  }
  console.log('dp', dp)
  
  return Math.min(...dp[n-1])
};

const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// const triangle = [[-1],[2,3],[1,-1,-3]]
console.log(minimumTotal(triangle))


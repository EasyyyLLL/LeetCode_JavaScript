/**
 * 第一版实现最小路径和的动态规划解法
 * @param {Array} grid 
 * @returns 
 */
const minPathSum = function(grid) {
  console.log('grid', grid)
  
  const n = grid.length
  const m = grid[0].length
  const dp = new Array(n)
  for (let i = 0; i < n; i++) {
      dp[i] = new Array(m)
  }

  dp[0][0] = grid[0][0]

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (i === 0 && j === 0) continue
          if (i === 0) {
              dp[i][j] = dp[i][j - 1] + grid[i][j]     
              continue
          }
          if (j === 0) {
              dp[i][j] = dp[i - 1][j] + grid[i][j]
              continue
          }
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
      }
  }
  console.log('dp', dp);
  
  return dp[n - 1][m - 1]
}
const grid = [[1,3,1],[1,5,1],[4,2,1]]
console.log('minPathSum(grid)', minPathSum(grid));



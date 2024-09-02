const uniquePathsWithObstacles = function(obstacleGrid) {
  const n = obstacleGrid.length
  const m = obstacleGrid[0].length
  const dp = new Array(n)

  for (let i = 0; i < n; i++) {
      dp[i] = new Array(m)
  }

  dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (i === 0 && j === 0) continue
          console.log('obstacleGrid[i][j]', obstacleGrid[i][j]);
          
          if (obstacleGrid[i][j] === 1) {
              dp[i][j] = 0
          } else {
              if (i === 0) {
                  dp[i][j] = dp[i][j - 1]
                  continue
              }

              if (j === 0) {
                  dp[i][j] = dp[i - 1][j]
                  continue
              }

              dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
          }
      }
  }
  console.log('dp', dp);
  
  return dp[n - 1][m - 1]
};

const grid = [[1,0]]
console.log(uniquePathsWithObstacles(grid));




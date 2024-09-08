const minFallingPathSum = function(matrix) {
  const n = matrix.length
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  dp[0] = [...matrix[0]]
  
  for (let i = 1; i < n; i++) {
      for (let j = 0; j < n; j++) {
          if (j === 0) {
              // 第一列
              dp[i][j] = Math.min(dp[i-1][j], dp[i - 1][j + 1]) + matrix[i][j]
          } else if (j === n-1) {
              // 最后一列
              dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j]) + matrix[i][j]      
          } else {
              dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i - 1][j + 1]) + matrix[i][j]
          }
      }
  }
  console.log('dp', dp)
  
  return Math.min(...dp[n-1])
};

const matrix = [[2,1,3],[6,5,4],[7,8,9]]
console.log(minFallingPathSum(matrix))


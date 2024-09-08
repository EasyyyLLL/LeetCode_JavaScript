const maximalSquare = function(matrix) {
  const n = matrix.length
  const m = matrix[0].length
  const dp = new Array(n).fill(0).map(() => new Array(m).fill(0))
  let maxSide = 0

  // 第一行只能形成一个正方形
  dp[0] = [...matrix[0].map(Number)]
  maxSide = Math.max(...dp[0])

  for (let i = 1; i < n; i++) {
      for (let j = 0; j < m; j++) {
          let nm = parseInt(matrix[i][j])
          if (j === 0) {
              // 第一列也只能形成一个正方形
              dp[i][j] = nm
          } else {        
              if (nm === 1) {
                  dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
              } else {
                  dp[i][j] = 0
              }
          }
          maxSide = Math.max(dp[i][j], maxSide)
      }
  }
  
  return maxSide * maxSide
};

const matrix = [["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","1"],["0","0","0","0","0"]]
console.log(maximalSquare(matrix))

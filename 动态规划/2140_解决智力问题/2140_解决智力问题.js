const mostPoints = function(questions) {
  const n = questions.length
  const dp = new Array(n + 1).fill(0)

  if (n === 1) return questions[0][0]

  for (let i = n-1; i >= 0; i--) {
      let dpn = 0
      if (i + questions[i][1] + 1 < n) {
        dpn = dp[i + questions[i][1] + 1]
      }
      dp[i] = Math.max(dp[i + 1], questions[i][0] + dpn)
  }

  return dp[0]
};

const questions = [[3,2],[4,3],[4,4],[2,5]]
console.log(mostPoints(questions));


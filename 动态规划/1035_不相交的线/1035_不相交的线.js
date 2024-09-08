const maxUncrossedLines = function(nums1, nums2) {
  const n = nums1.length
  const m = nums2.length
  const dp = new Array(n+1).fill(0).map(() => new Array(m+1).fill(0))

  for (let i = 1; i <= n; i++) {
      const n1 = nums1[i-1]
      for (let j = 1; j <= m; j++) {
          const m1 = nums2[j-1]
          if (n1 === m1) {
              dp[i][j] = dp[i - 1][j - 1] + 1
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
          }
      }
  }

  return dp[n][m]
};

const nums1 = [1,4,2]
const nums2 = [1,2,4]
console.log(maxUncrossedLines(nums1, nums2));

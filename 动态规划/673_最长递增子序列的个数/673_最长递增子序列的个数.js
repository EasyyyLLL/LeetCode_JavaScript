const findNumberOfLIS = function(nums) {
  // dp[i] 表示以第i个元素结尾的最长递增子序列的长度
  const dp = new Array(nums.length)
  dp[0] = 1
  // cnt[i] 表示以第i个元素结尾的最长递增子序列的个数
  const cnt = new Array(nums.length)
  cnt[0] = 1

  for (let i = 1; i < nums.length; i++) {
      dp[i] = 1
      cnt[i] = 1
      for (let j = 0; j < i; j++) {
          if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1)
          }
      }
  }
};
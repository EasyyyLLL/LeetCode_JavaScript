const maxSubArray = function(nums) {
  const n = nums.length
  const dp = new Array(n)
  let maxSum = nums[0]
  dp[0] = nums[0]

  for (let i = 1; i < n; i++) {
      dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 1])
      maxSum = Math.max(dp[i], maxSum)
  }
  console.log('dp', dp)
  
  return maxSum
};

const nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log('maxSubArray(nums)', maxSubArray(nums))


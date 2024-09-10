const deleteAndEarn = function(nums) {
  const n = nums.length
  const max = Math.max(...nums)
  const sum = new Array(max + 1).fill(0)
  console.log('sum', sum);
  
  for (let i = 0; i < n; i++) {
      sum[nums[i]] = sum[nums[i]] + 1
  }
  console.log('sum', sum);

  const dp = new Array(max + 1).fill(0)

  dp[0] = sum[0]
  dp[1] = sum[1]

  for (let i = 2; i <= max; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i-2] + sum[i]*i)
  }

  return dp[max]
};

const nums = [2,2,3,3,3,4]
console.log(deleteAndEarn(nums));


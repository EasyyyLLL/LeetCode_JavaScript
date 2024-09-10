const longestConsecutive = function(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const dp = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
      if (nums[i] === nums[i - 1] + 1) {
          dp[i] = dp[i - 1] + 1
      } else if (nums[i] === nums[i - 1]) {
        dp[i] = dp[i-1]
      }
  }
  
  return Math.max(...dp)
};

const nums = [1,2,0,1]
console.log(longestConsecutive(nums));


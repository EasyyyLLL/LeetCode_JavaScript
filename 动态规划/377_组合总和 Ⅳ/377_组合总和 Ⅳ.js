const combinationSum4 = function(nums, target) {
  const n = nums.length
  const sum = nums.reduce((curr, old) => {
      return curr + old
  }, 0)

  // if (sum < target) return 0

  const dp = Array.from({ length: target + 1 }, () => 0)

  dp[0] = 1

  for (let i = 1; i <= target; i++) {
      for (let j = 0; j < n; j++) {
          const num = nums[j]
          
          if (num <= i) {
              dp[i] = dp[i] + dp[i - num]
          }
      }
  }

  return dp[target]
};

const nums = [1, 2]
const target = 10
console.log(combinationSum4(nums, target));


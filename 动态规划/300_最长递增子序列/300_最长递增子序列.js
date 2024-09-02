// /**
//  * 求最长递增连续子序列的
//  * @param {Array} nums 
//  * @returns 
//  */
// const lengthOfLIS = function(nums) {
//   const dp = new Array(nums.length)
//   dp[0] = 1

//   for (let i = 1; i < nums.length; i++) {
//       if (nums[i] < nums[i - 1]) {
//           dp[i] = 1
//       } else {
//           dp[i] = dp[i - 1] + 1
//       }
//   }
//   console.log('dp', dp);
  
//   return Math.max(...dp)
// };
const lengthOfLIS = function(nums) {
  const dp = new Array(nums.length)
  dp[0] = 1

  for (let i = 1; i < nums.length; i++) {
      dp[i] = 1
      for (let j = 0; j < i; j++) {
          if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1)
          }
      }
  }
  return Math.max(...dp)
};

const nums = [10,9,2,5,3,7,101,18]
console.log(lengthOfLIS(nums));


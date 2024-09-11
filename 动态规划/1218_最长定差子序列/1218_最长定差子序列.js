const longestSubsequence = function(arr, difference) {
  const n = arr.length
  // const dp = new Array(n).fill(1)
  const dp = new Map();
  let ans = 0

  for (let i = 0; i < n; i++) {
      dp.set(arr[i], (dp.get(arr[i] - difference) || 0) + 1);
      ans = Math.max(ans, dp.get(arr[i]))
  }

  return ans
};

const arr = [4,12,10,0,-2,7,-8,9,-9,-12,-12,8,8]
const difference = 0
console.log(longestSubsequence(arr, difference))



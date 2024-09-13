const longestArithSeqLength = function(nums) {
  const n = nums.length
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  const maxDiff = max - min

  let ans = 1
  for (let d = -maxDiff; d <= maxDiff; d++) {
      const f = new Array(max + 1).fill(-1)

      for (let num of nums) {
          let prev = num - d
          if (prev >= min && prev <= max && f[prev] != -1) {
              f[num] = Math.max(f[num], f[prev] + 1)
              ans = Math.max(ans, f[num])
          }
          f[num] = Math.max(f[num], 1)
      }
  }

  return ans

};
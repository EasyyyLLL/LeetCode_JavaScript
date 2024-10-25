/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
  const n = nums.length

  let left = 0
  let right = n - 1

  while (left < right) {
      const mid = left + Math.floor((right - left) / 2)

      if (nums[mid] > nums[mid + 1]) {
          right = mid
      } else {
          left = mid + 1
      }
  }

  return left
  
};
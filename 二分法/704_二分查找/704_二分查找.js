/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  const n = nums.length
  let left = 0
  let right = n - 1

  while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) {
          return mid
      } else if (nums[mid] > target) {
          right = mid - 1
      } else {
          left = mid + 1
      }
  }

  return -1
};
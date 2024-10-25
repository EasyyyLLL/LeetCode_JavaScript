/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {

  const binarySearch = (nums, target, isStart) => {
      const n = nums.length
      
      let left = 0
      let right = n - 1
      let result = -1

      while (left <= right) {
          const mid = left + Math.floor((right - left) / 2)

          if (nums[mid] === target) {
              result = mid
              if (isStart) {
                  right = mid - 1
              } else {
                  left = mid + 1
              }
          } else if (nums[mid] > target) {
              right = mid - 1
          } else {
              left = mid + 1
          }

      }

      return result
  }

  const startPosition = binarySearch(nums, target, true)

  if (startPosition !== -1) {
      const endPosition = binarySearch(nums, target, false)
      return [startPosition, endPosition]
  } else {
      return [-1, -1]
  }

};
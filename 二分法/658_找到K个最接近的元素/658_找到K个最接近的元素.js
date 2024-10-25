/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function (arr, k, x) {
  const binarySearch = (nums, target) => {
      // 需要返回与目标值最接近的位置，不需要返回与目标值相等的位置
      const n = nums.length
      let left = 0
      let right = n - 1

      while (left < right) {
          const mid = Math.floor((left + right) / 2)

          if (nums[mid] === target) {
              return mid
          } else if (nums[mid] > target) {
              right = mid
          } else {
              left = mid + 1
          }
      }

      return left

  }

  let right = binarySearch(arr, x)
  let left = right - 1

  while (k > 0) {
      if (left < 0) {
          right++
      } else if (right >= arr.length) {
          left--
      } else if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
          left--
      } else {
          right++
      }
      k--
  }

  return arr.slice(left + 1, right);
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length

  if (n <= 2) return []
  if (nums[0] > 0) return []

  const result = []

  for (let i = 0; i < n - 2; i++) {
      // 跳过重复的元素
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue
      }

      let left = i + 1
      let right = n - 1

      while (left < right) {
          const sum = nums[left] + nums[right]
          
          if (sum > -nums[i]) {
              right--
          } else if (sum < -nums[i]) {
              left++
          } else {
              result.push([nums[i], nums[left], nums[right]])

              // 跳过重复的元素
              while (left < right && nums[left] === nums[left + 1]) {
                  left++
              }
              while (left < right && nums[right] === nums[right - 1]) {
                  right--
              }

              left++
              right--
          }
      }
  }

  return result

};
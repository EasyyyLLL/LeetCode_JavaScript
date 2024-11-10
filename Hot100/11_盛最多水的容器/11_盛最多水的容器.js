/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  const n = height.length

  if (n < 1) return 0

  let left = 0
  let right = n - 1
  let maxSquare = 0

  while (left < right) {
      const square = (right - left) * Math.min(height[left], height[right])
      maxSquare = Math.max(square, maxSquare)

      if (height[left] < height[right]) {
          left++
      } else {
          right--
      }
  }

  return maxSquare
};
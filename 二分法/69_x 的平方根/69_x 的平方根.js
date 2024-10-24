/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  let left = 0
  let right = x

  while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)

      if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
          return mid
      } else if (mid * mid > x) {
          right = mid - 1
      } else {
          left = mid + 1
      }
  }

};
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
  let left = 0
  let right = n

  while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      const result = guess(mid)

      if (result === 0) {
          return mid
      } else if (result < 0) {
          right = mid - 1
      } else {
          left = mid + 1
      }

  }

};
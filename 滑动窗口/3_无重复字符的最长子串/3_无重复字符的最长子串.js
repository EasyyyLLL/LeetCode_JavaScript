/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const n = s.length
  let left = 0
  let maxLength = 0
  const charMap = new Map()

  for (let right = 0; right < n; right++) {
      const currentChar = s[right]

      if (charMap.has(currentChar)) {
          left = Math.max(charMap.get(currentChar) + 1, left)
      }

      charMap.set(currentChar, right)

      maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
  
};
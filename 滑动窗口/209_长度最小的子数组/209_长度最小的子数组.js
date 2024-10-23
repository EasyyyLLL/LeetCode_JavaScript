/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(target, nums) {
    const n = nums.length
    let minLen = n
    let left = 0
    let sum = 0
    let isTarget = false

    for (let right = 0; right < n; right++) {
        const currentEle = nums[right]
        sum = sum + currentEle

        while (sum >= target) {
            isTarget = true
            minLen = Math.min(minLen, right - left + 1)
            sum = sum - nums[left]
            left++
        }
    }

    if (isTarget) {
        return minLen
    } else {
        return 0
    }
    
};
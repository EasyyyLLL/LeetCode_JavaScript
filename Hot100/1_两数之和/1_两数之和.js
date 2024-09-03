const twoSum = function(nums, target) {
  const sumMap = new Map()

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]

      if (sumMap.has(complement)) {
          return [sumMap.get(complement), i]
      }

      sumMap.set(nums[i], i)
  }

  return []
};
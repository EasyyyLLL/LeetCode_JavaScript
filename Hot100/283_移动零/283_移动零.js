const moveZeroes = function(nums) {
  const n = nums.length
  let b = 0

  for (let i = 0; i < n; i++) {
      let num = nums[i]
      if (num !== 0) {
          nums[b] = num
          b++
      }
  }
  nums.splice(b, n - b, ...new Array(n-b).fill(0))

  return nums
};

const nums = [0,1,0,3,12]
console.log(moveZeroes(nums));


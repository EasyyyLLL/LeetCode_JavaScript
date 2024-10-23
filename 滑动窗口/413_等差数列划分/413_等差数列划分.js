/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
  const n = nums.length;

  if (n < 3) return 0;

  let count = 0; // 记录等差子数组的个数
  let currentCount = 0; // 记录当前符合条件的等差子数组个数

  for (let i = 2; i < n; i++) {
    // 如果当前三个元素的差相同
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      // 当前的等差子数组数目累加（等差数列可以从 i-2, i-1, i 开始）
      currentCount += 1;
      // 更新总的等差子数组数目
      count += currentCount;
    } else {
      // 如果当前不符合等差数列，重置当前的计数
      currentCount = 0;
    }
  }

  return count;
};

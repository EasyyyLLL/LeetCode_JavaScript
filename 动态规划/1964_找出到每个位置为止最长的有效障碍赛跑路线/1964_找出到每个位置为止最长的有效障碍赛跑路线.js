function longestObstacleCourseAtEachPosition(obstacles) {
  const n = obstacles.length;
  const ans = Array(n).fill(0);  // 结果数组
  const dp = [];  // 用来维护当前最长路径的高度

  for (let i = 0; i < n; i++) {
      const height = obstacles[i];
      let left = 0, right = dp.length;

      // 使用二分查找找到可以插入的位置
      while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (dp[mid] <= height) {
              left = mid + 1;
          } else {
              right = mid;
          }
      }

      // left 是可以插入的位置，表示到当前的最长路径长度
      ans[i] = left + 1;

      // 更新dp数组
      if (left < dp.length) {
          dp[left] = height;
      } else {
          dp.push(height);
      }
  }

  return ans;
}
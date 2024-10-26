/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
const canMeasureWater = function(x, y, target) {
  if (target > x + y) return false
  if (target === 0) return true

  const visited = new Set()

  const dfs = (a, b) => {
      const state = `${a}, ${b}`  // 表示两个水壶状态
      if (visited.has(state)) return false

      visited.add(state)

      if (a === target | b === target || a + b === target) {
          return true
      }

      return (
          dfs(0, b) ||
          dfs(a, 0) ||
          dfs(x, b) ||
          dfs(a, y) ||
          dfs(Math.max(0, a - (y - b)), Math.min(y, b + a)) ||
          dfs(Math.min(x, a + b), Math.max(0, b - (x - a)))
      )
  }

  return dfs(0, 0)
};
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function(n, edges) {
  if (n === 1) return [0]

  // 构建邻接列表
  const adjList = Array.from({ length: n }, () => [])

  for (let [a, b] of edges) {
      adjList[a].push(b)
      adjList[b].push(a)
  }

  // 初始化叶节点
  let leaves = []

  for (let i = 0; i < n; i++) {
      if (adjList[i].length === 1) {
          leaves.push(i)
      }
  }

  // 逐步移除叶节点
  let remianNodes = n

  while (remianNodes > 2) {
      remianNodes -= leaves.length
      const newLeaves = []

      for (let leaf of leaves) {
          const neighbor = adjList[leaf].pop()
          adjList[neighbor] = adjList[neighbor].filter(node => node !== leaf)

          if (adjList[neighbor].length === 1) {
              newLeaves.push(neighbor)
          }
      }

      leaves = newLeaves
  }

  return leaves
};
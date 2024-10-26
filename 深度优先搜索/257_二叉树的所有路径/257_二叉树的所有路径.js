/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  const result = []

  const dfs = (node, path) => {
      if (node === null) return

      if (node.right === null && node.left === null) {
          result.push(`${path}${node.val}`)
          return
      }

      const nextPath = `${path}${node.val}->`

      dfs(node.left, nextPath)
      dfs(node.right, nextPath)
  }

  dfs(root, '')

  return result
};
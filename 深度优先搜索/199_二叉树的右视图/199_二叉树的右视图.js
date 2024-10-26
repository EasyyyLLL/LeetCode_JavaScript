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
 * @return {number[]}
 */
const rightSideView = function(root) {
  const result = []

  const dfs = (node, depth) => {
      if (node === null) return

      if (result.length === depth - 1) {
          result.push(node.val)
      }

      dfs(node.right,depth + 1)
      dfs(node.left, depth + 1)

  }

  dfs(root, 1)
  
  return result
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  const dfs = node => {
      if (node === null) return null

      if (node === p || node === q) {
          return node
      }

      const left = dfs(node.left)
      const right = dfs(node.right)

      if (left !== null && right !== null) {
          return node
      }

      return left !== null ? left : right
  }

  const result = dfs(root)

  return result
};
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
const lowestCommonAncestor = function (root, p, q) {
  let result = null
  const pVal = p.val
  const qVal = q.val

  const dfs = node => {
      if (node === null) return

      const val = node.val

      if (val > pVal && val > qVal) {
          dfs(node.left)
      } else if (val < pVal && val < qVal) {
          dfs(node.right)
      } else {
          result = node
          return
      }
  }

  dfs(root)

  return result
};
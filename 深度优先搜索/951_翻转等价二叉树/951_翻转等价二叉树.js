/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const flipEquiv = function(root1, root2) {
  let result = true

 const dfs = (node1, node2) => {
      if (node1 === null && node2 === null) {
          return true
      }

      if (node1 === null || node2 === null || node1.val !== node2.val) {
          result = false
          return false
      }

      const noFilp = dfs(node1.left, node2.left) && dfs(node1.right, node2.right)
      const filp = dfs(node1.left, node2.right) && dfs(node1.right, node2.left)

      result = noFilp || filp
      return result
 } 

 dfs(root1, root2)

 return result
};
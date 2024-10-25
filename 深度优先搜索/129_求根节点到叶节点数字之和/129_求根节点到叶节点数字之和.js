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
 * @return {number}
 */
const sumNumbers = function (root) {
  let result = 0;

  const dfs = (node, prevSum) => {
    if (node === null) return;

    const sum = prevSum * 10 + node.val;

    if (node.left === null && node.right === null) {
      result = result + sum;
    } else {
      dfs(node.left, sum);

      dfs(node.right, sum);
    }
  };

  dfs(root, 0);

  return result;
};

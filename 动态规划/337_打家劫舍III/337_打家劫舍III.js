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
const rob = function (root) {
  const memo = new Map();

  const dp = (node) => {
    if (!node) return 0;

    if (memo.has(node)) return memo.get(node);

    // 偷窃当前节点
    const stealNode =
      node.val +
      (node.left ? dp(node.left.left) + dp(node.left.right) : 0) +
      (node.right ? dp(node.right.left) + dp(node.right.right) : 0);

    // 跳过当前节点
    const skipNode = dp(node.left) + dp(node.right);

    const rob = Math.max(stealNode, skipNode);

    memo.set(node, rob);

    return rob;
  };

  return dp(root);
};

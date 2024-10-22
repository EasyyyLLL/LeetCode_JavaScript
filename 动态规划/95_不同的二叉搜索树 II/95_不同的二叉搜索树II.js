/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function (n) {
  if (n === 0) return [];

  // 调用递归函数构建树
  return buildTrees(1, n);
};

// 递归构建二叉搜索树
function buildTrees(start, end) {
  const result = [];

  // 如果区间无效，则返回空树
  if (start > end) {
      result.push(null);
      return result;
  }

  // 遍历所有可能的根节点值
  for (let i = start; i <= end; i++) {
      // 递归构建左子树和右子树
      const leftTrees = buildTrees(start, i - 1);
      const rightTrees = buildTrees(i + 1, end);

      // 将左右子树与当前根节点组合
      for (const left of leftTrees) {
          for (const right of rightTrees) {
              const root = new TreeNode(i, left, right);
              result.push(root);
          }
      }
  }

  return result;
}
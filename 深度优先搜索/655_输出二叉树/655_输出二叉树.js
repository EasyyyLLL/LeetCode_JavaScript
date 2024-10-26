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
 * @return {string[][]}
 */
const printTree = function(root) {
  const getHeight = node => {
      if (node === null) return -1

      return 1 + Math.max(getHeight(node.left), getHeight(node.right))
  }

  const height = getHeight(root)

  const m = height + 1
  const n = Math.pow(2, height + 1) - 1

  const resultArr = Array.from({ length: m }, () => Array(n).fill(""))

  // const fillArr = (node, r, c, width) => {
  //     if (node === null) return

  //     resultArr[r][c] = node.val.toString()

  //     const nextWidth = Math.pow(2, width - 1) 

  //     if (node.left !== null) {
  //         fillArr(node.left, r + 1, c - nextWidth, nextWidth)
  //     }

  //     if (node.right !== null) {
  //         fillArr(node.right, r + 1, c + nextWidth, nextWidth)
  //     }
  // }

  const fillArr = (node, r, c, height) => {
      if (node === null) return

      resultArr[r][c] = node.val.toString()
      const constant = Math.pow(2, height - r - 1)

      if (node.left !== null) {
          fillArr(node.left, r + 1, c - constant, height)
      }

      if (node.right !== null) {
          fillArr(node.right, r + 1, c + constant, height)
      }
  }

  fillArr(root, 0, Math.floor((n - 1) / 2), height)

  return resultArr
};

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const root = new TreeNode(1)

root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.right = new TreeNode(4)

console.log(printTree(root))


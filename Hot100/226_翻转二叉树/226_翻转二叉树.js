const invertTree = function(root) {
  if (root === null) return root

  const lastLeft = root.left
  const lastRight = root.right
  root.left = lastRight
  root.right = lastLeft

  invertTree(root.left)
  invertTree(root.right)

  return root
};
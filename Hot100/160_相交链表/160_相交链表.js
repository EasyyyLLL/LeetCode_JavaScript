const getIntersectionNode = function(headA, headB) {
  const visited = new Set()
  let nowNode = headA

  while(nowNode !== null) {
      visited.add(nowNode)
      nowNode = nowNode.next
  }

  nowNode = headB
  while(nowNode !== null) {
      if (visited.has(nowNode)) {
          return nowNode
      }
      nowNode = nowNode.next
  }
  return null
};
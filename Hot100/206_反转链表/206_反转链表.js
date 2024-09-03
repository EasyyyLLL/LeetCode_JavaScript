const reverseList = function(head) {
  if (head === null) return null

  let prev = null
  let curr = head

  while (curr !== null) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
  }
  return prev
};
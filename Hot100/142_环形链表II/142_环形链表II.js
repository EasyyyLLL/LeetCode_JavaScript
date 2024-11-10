/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function(head) {
  if (head === null) return null
  
  const visited = new Set()

  let result = -1
  let index = 0
  let current = head

  while (current !== null) {
      if (visited.has(current)) {
          return current
      }

      visited.add(current)
      current = current.next
      index++
  }

  return null
};
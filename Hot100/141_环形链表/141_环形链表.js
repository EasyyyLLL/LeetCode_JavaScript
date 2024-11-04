/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  const visited = new Set()

  let result = false
  let current = head

  while (current !== null) {
      if (visited.has(current)) {
          result = true
          break
      }

      visited.add(current)

      current = current.next
  }

  return result
};
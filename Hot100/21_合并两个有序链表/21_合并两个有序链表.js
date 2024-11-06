/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  if (list1 === null) return list2
  if (list2 === null) return list1

  let current1 = list1
  let current2 = list2

  let newListHead = new ListNode(-1)
  let newCurrent = newListHead

  while (current1 !== null & current2 !== null) {
      if (current1.val < current2.val) {
          newCurrent.next = current1
          current1 = current1.next
      } else {
          newCurrent.next = current2
          current2 = current2.next
      }

      newCurrent = newCurrent.next
  }

  if (current1 !== null) {
      newCurrent.next = current1
  }

  if (current2 !== null) {
      newCurrent.next = current2
  }

  return newListHead.next

};
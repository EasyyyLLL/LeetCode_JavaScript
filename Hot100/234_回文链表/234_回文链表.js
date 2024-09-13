const isPalindrome = function(head) {
  const vals = []
  let curr = head
  
  while (curr !== null) {
      vals.push(curr.val)
      curr = curr.next
  }
  console.log('vals', vals);

  for (let i = 0, j = vals.length - 1; i < j; i++, j--) {
      if (vals[i] !== vals[j]) {
          return false
      }
  }

  return true
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const head = new ListNode(1)
head.next = new ListNode(2)

console.log(isPalindrome(head))



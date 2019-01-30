/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
console.time('starting')
var mergeTwoLists = function(l1, l2) {
  var listNode = new ListNode(-1)
  var i = l1
  var j = l2
  var current = listNode
  while (i && j) {
    if (i.val < j.val) {
      current.next = i
      i = i.next
    } else {
      current.next = j
      j = j.next
    }
    current = current.next
  }
  if (i) current.next = i
  if (j) current.next = j
  return listNode.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}

mergeTwoLists()
console.timeEnd('starting')

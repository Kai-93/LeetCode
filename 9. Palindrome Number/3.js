/**
 * @param {number} x
 * @return {number}
 */
console.time('starting')
const isPalindrome = function(x) {
  let list = String(x).split('')
  let list1 = list.toString()
  let list2 = list.reverse().toString()
  if (list1 === list2) {
    return true
  }
  return false
}
console.log(isPalindrome(141))
console.timeEnd('starting')

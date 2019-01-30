/**
 * @param {number} x
 * @return {number}
 */
console.time('starting')
const isPalindrome = function(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false
  }
  let reversed = 0
  while (reversed < x) {
    reversed = reversed * 10 + (x % 10)
    x = parseInt(x / 10)
  }
  return x === reversed || x === parseInt(reversed / 10)
}
console.log(isPalindrome(101))
console.timeEnd('starting')

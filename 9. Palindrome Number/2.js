/**
 * @param {number} x
 * @return {number}
 */
console.time('starting')
const isPalindrome = function(x) {
  if (x < 0) {
    return false
  }
  if (x < 10) {
    return true
  }
  let start = String(x).split('')
  let end = x
  let length = start.length
  while (true) {
    _start = start.shift()
    _end = end % 10
    if (Number(_start) !== _end) {
      return false
    }
    if (length + 1 === start.length * 2 || start.length * 2 === length) {
      return true
    }
    end = parseInt(end / 10)
  }
}
console.log(isPalindrome(0))
console.timeEnd('starting')

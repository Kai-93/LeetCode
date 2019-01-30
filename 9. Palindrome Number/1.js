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
  let _x = String(x).split('')
  let start = 0
  let end = _x.length - 1
  while (true) {
    var _start = _x[start]
    var _end = _x[end]
    if (_end === undefined || _start === undefined) {
      return true
    }
    if (_end !== _start) {
      return false
    }
    if (start + 1 === end) {
      return true
    }
    start++
    end--
  }
}
console.log(isPalindrome(1231))
console.timeEnd('starting')

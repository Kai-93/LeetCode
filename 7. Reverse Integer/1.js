/**
 * @param {number} x
 * @return {number}
 */
console.time('starting')
var reverse = function(x) {
  var _result = Number(
    String(Math.abs(x))
      .split('')
      .reverse()
      .join('')
  )

  if (_result > Math.pow(2, 31) - 1) {
    return 0
  }
  return _result * Math.sign(x)
}
console.log(reverse(-12312))
console.timeEnd('starting')

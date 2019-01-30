/**
 * @param {number} x
 * @return {number}
 */
console.time('starting')
var reverse = function(x) {
  var fun = function(num) {
    var _result = String(num)
    var _r = []
    for (var i = 0; i < _result.length; i++) {
      _r.unshift(_result[i])
    }
    return _r.join('')
  }
  var result = x < 0 ? -Number(fun(-x)) : Number(fun(x))
  if (result < -2147483648 || result > 2147483647) {
    return 0
  }
  return result
}
console.log(reverse(12312412))
console.timeEnd('starting')

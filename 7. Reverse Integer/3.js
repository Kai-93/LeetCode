/**
 * @param {number} x
 * @return {number}
 */
console.time('starting')
const reverse = function(x) {
  let result = 0
  let sign = x >= 0 ? 1 : -1
  let _x = x * sign
  while (_x > 0) {
    const temp = parseInt(_x / 10)
    result = result * 10 + _x % 10
    _x = temp
  }
  if (result > 2147483647) {
    return 0
  }
  return result * sign
}
console.log(reverse(-12312412000))
console.timeEnd('starting')

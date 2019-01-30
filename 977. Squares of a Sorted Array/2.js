/**
 * @param {number[]} A
 * @return {number[]}
 */
console.time('starting')
var sortedSquares = function(A) {
  var length = A.length
  var i = 0
  var j = length - 1
  var result = []
  for (var k = 0; k < length; k++) {
    var _i = A[i] * A[i]
    var _j = A[j] * A[j]
    if (_i > _j) {
      result.unshift(_i)
      i++
    } else {
      result.unshift(_j)
      j--
    }
  }
  return result
}
var arr = [
  -20,
  -19,
  -14,
  -12,
  -7,
  -5,
  2,
  2,
  4,
  6,
  6,
  7,
  8,
  9,
  10,
  12,
  17,
  17,
  18,
  18
]
console.log(sortedSquares(arr))
console.timeEnd('starting')

/**
 * @param {number[]} A
 * @return {number[]}
 */
console.time('starting')
var sortedSquares = function(A) {
  var length = A.length
  for (var i = 0; i < length; i++) {
    var current = A[i] * A[i]
    A[i] = current
  }
  for (var j = 0; j < length; j++) {
    var min = A[j]
    var index = j
    for (var k = j + 1; k < length; k++) {
      var _value = A[k]
      if (min > _value) {
        index = k
        min = _value
      }
    }
    var valueOfJ = A[j]
    A[j] = A[index]
    A[index] = valueOfJ
  }
  return A
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

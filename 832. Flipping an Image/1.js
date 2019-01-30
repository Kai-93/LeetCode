/**
 * @param {number[][]} A
 * @return {number[][]}
 */
console.time('starting')
var flipAndInvertImage = function(A) {
  var length = A.length
  for (var i = 0; i < length; i++) {
    var _length = A[i].length
    var _i = 0
    var _j = _length - 1
    while (_i <= _j) {
      var temp = A[i][_i]
      A[i][_i] = A[i][_j] ^ 1
      A[i][_j] = temp ^ 1
      _i++
      _j--
    }
  }
  return A
}
console.log(
  flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])
)
console.timeEnd('starting')

/**
 * @param {number[]} A
 * @return {number[]}
 */
console.time('starting')
var sortArrayByParity = function(A) {
  var length = A.length
  var arr = []
  for (var i = 0; i < length; i++) {
    if (A[i] % 2 === 0) {
      arr.unshift(A[i])
    } else {
      arr.push(A[i])
    }
  }
  return arr
}
console.log(sortArrayByParity([3, 1, 2, 4]))
console.timeEnd('starting')

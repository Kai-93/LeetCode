/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  var lengthOfStrs = strs.length
  // 如strs长度小于1,直接返回
  if (lengthOfStrs === 0) {
    return strs.join('')
  }
  var strOfFirstStrLength = strs[0].length
  for (var j = 1; j <= strOfFirstStrLength; j++) {
    for (var i = 1; i < lengthOfStrs; i++) {
      var one = strs[0].slice(0, j)
      var two = strs[i].slice(0, j)
      if (one !== two) {
        return strs[0].slice(0, j - 1)
      }
    }
  }
  return strs[0]
}
console.time('starting')
console.log(longestCommonPrefix(['a', 'b']))
console.timeEnd('starting')

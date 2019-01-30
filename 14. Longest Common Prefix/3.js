/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  var lengthOfStrs = strs.length
  // 如strs长度小于1,直接返回 ""
  if (lengthOfStrs === 0) return ''
  var strOfFirstStrLength = strs[0].length
  var prefix = strs[0]
  for (var i = 1; i < lengthOfStrs; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1)
      if (prefix === '') {
        return prefix
      }
    }
  }
  return prefix
}
console.time('starting')
let arr = ['dog', 'racecar', 'car']
console.log(longestCommonPrefix(arr))
console.timeEnd('starting')

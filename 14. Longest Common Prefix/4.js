/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var length = strs.length
  // 如strs长度小于1,直接返回 ""
  if (length <= 1) return strs.join('')
  var length = strs.length
  var leftHalf = parseInt(strs.length / 2)
  var left = funLongestCommonPrefix(strs.splice(0, leftHalf))
  var right = funLongestCommonPrefix(strs)
  return funLongestCommonPrefix([left, right])
}

var funLongestCommonPrefix = function(strs) {
  var length = strs.length
  if (length === 0) return ''
  var strOfFirstStrLength = strs[0].length
  var prefix = strs[0]
  for (var i = 1; i < length; i++) {
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
console.log(longestCommonPrefix(['c', 'c']))
console.timeEnd('starting')

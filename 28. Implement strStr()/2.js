/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

console.time('starting')
var strStr = function(haystack, needle) {
  var length = needle.length
  var i = 0
  var j = 0
  while (true) {
    // 结果
    if (i === length) {
      return j - length
    }
    if (j === haystack.length) {
      return -1
    }
    // 若相等则比较下一个
    if (needle[i] === haystack[j]) {
      i++
      j++
    } else {
      j = i !== 0 ? j - i + 1 : j + 1
      i = 0
    }
  }
}
console.log(strStr('aaaab', 'ab'))
console.timeEnd('starting')

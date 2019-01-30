/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  var lengthOfStrs = strs.length
  // 如strs长度小于1,直接返回
  if (lengthOfStrs <= 1) {
    return strs.join('')
  }
  var result = ''
  var strOfFirstStrLength = strs[0].length
  myloop: for (var j = 0; j < strOfFirstStrLength; j++) {
    var charOne = strs[0].charAt(j)
    for (var i = 1; i < lengthOfStrs; i++) {
      var charTwo = strs[i].charAt(j)
      // 若不相等则break
      if (charOne !== charTwo || charTwo === '') {
        break myloop
      }
      // 若strs中最后一个字符串中的第j个字符
      // 与charOne中的第j个字符相等
      // 则加入result中
      if (i === lengthOfStrs - 1) {
        result += charOne
      }
    }
  }
  return result
}
console.time('starting')
console.log(longestCommonPrefix(['dog', 'dog', 'dog']))
console.timeEnd('starting')

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  var prefix = strs[0]
  return getCommonPrefix(prefix, strs)
}

/**
 *
 * @param {*} str 需判断是否是开头的字符串
 * @param {*} arr 字符串数组
 * @param {*} start 开始比较的下标
 */
var getCommonPrefix = function(str, arr, start = 0) {
  var length = str.length
  var mid = parseInt(length / 2)
  var left = str.slice(0, mid)
  var right = str.slice(mid, length)
  // 不是 left 开头
  var isLeft = isCommonPrefix(left, arr, start)
  if (!isLeft) {
    return left.length > 1 ? getCommonPrefix(left, arr, start) : ''
  }
  // left 开头
  // 剩下的不是 right 开发
  var isRight = isCommonPrefix(right, arr, start + mid)
  if (!isRight) {
    right = right.length > 1 ? getCommonPrefix(right, arr, start + mid) : ''
  }
  // left 开头
  // 剩下的 right 开头
  return left + right
}

// 判断arr中所有字符串的是不是都是以str开头的
var isCommonPrefix = function(str, arr, start = 0) {
  var length = arr.length
  for (var i = 1; i < length; i++) {
    var string = arr[i].slice(start)
    if (!string.startsWith(str)) {
      return false
    }
  }
  return true
}

console.time('starting')
var strs = ['']
console.log(longestCommonPrefix(strs))
console.timeEnd('starting')

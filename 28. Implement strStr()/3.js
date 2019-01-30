/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

console.time('starting')
var strStr = function(haystack, needle) {
  // use split
  if (needle === '') {
    return 0
  }
  let arr = haystack.split(needle)
  if (arr.length > 1) {
    return arr[0].length
  }
  return -1
}
console.log(strStr('aaaaa', 'bba'))
console.timeEnd('starting')

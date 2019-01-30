/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

console.time('starting')
var strStr = function(haystack, needle) {
  var arr1 = [],
    arr2 = []
  arr1 = needle.split('')
  arr2 = haystack.split('')
  for (var i = 0; i < arr2.length; i++) {
    if (arr1[0] == arr2[i]) {
      for (var g = 0; g < arr1.length; g++) {
        if (arr1[g] !== arr2[g + i]) {
          break
        }
        if (g == arr1.length - 1) {
          return i
        }
      }
    } else {
      continue
    }
  }
}
console.log(strStr('aaaba', 'ab'))
console.timeEnd('starting')

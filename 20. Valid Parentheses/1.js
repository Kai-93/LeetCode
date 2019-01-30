/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
  var arr = []
  var obj = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  var obj2 = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i)
    if (obj2[char]) {
      arr.unshift(char)
      continue
    }
    if (obj[char] !== arr.shift()) {
      return false
    }
  }
  return arr.length === 0
}

console.time('starting')
var strs = '{[}'
console.log(isValid(strs))
console.timeEnd('starting')

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  s = s.split('')
  var map = {
    '(': 1,
    ')': -1,
    '{': 2,
    '}': -2,
    '[': 3,
    ']': -3
  }
  var stack = []

  for (var i = 0; i < s.length; i++) {
    if (map[s[i]] > 0) {
      stack.push(map[s[i]])
    } else {
      if (stack.pop() + map[s[i]] !== 0) {
        return false
      }
    }
  }

  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}
console.time('starting')
var strs = '{[}'
console.log(isValid(strs))
console.timeEnd('starting')

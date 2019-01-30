var map = {
  '(': ')',
  '[': ']',
  '{': '}'
}

var isValid = function(s) {
  var stack = []

  for (var i = 0; i < s.length; i++) {
    var el = s[i]
    if (map[el]) {
      stack.push(map[el])
    } else {
      if (el !== stack.pop()) {
        return false
      }
    }
  }
  return stack.length === 0
}

console.time('starting')
var strs = '{[}'
console.log(isValid(strs))
console.timeEnd('starting')

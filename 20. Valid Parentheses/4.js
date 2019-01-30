var isValid = function(s) {
  let myStack = []
  const mappingLeft = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const mappingRight = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let i = 0; i < s.length; i++) {
    let poppedVal = null

    if (mappingLeft[s[i]]) myStack.push(s[i])
    if (mappingRight[s[i]]) {
      poppedVal = myStack.pop()
      if (poppedVal !== mappingRight[s[i]]) return false
    }
  }
  if (myStack.length > 0) return false
  return true
}
console.time('starting')
var strs = '{[}'
console.log(isValid(strs))
console.timeEnd('starting')

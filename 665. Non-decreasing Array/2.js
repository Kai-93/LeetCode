/**
 * @param {number[]} nums
 * @return {boolean}
 */

console.time('starting')

function isMonotoneIncreasing(nums) {
  var length = nums.length
  for (var i = 0; i < length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false
    }
  }
  return true
}

var checkPossibility = function(nums) {
  var length = nums.length
  var value = ''
  var index = 0
  myloop: for (var i = 0; i < length; i++) {
    if (nums[i] > nums[i + 1]) {
      if (i === 0 || nums[i - 1] <= nums[i + 1]) {
        index = i
      }
      if (nums[i - 1] > nums[i + 1]) {
        index = i + 1
      }
      value = nums[index]
      break myloop
    }
  }
  if (index === 0 && value === '') return true
  nums[index] = undefined
  var shift = ''
  var isPush = false
  var result = []

  while (nums.length) {
    shift = nums.shift()
    if (shift !== undefined) {
      if (shift >= value && !isPush) {
        result.push(value)
        isPush = true
      }
      result.push(shift)
    }
    if (
      result.length > 1 &&
      result[result.length - 2] > result[result.length - 1]
    )
      return false
  }
  console.log(result)
  return true
}

// let arr = [2, 4, 4, 2, 4]
// let arr = [1, 2, 3]
// let arr = [4, 2, 3]
let arr = [1, 5, 4, 6, 7, 8, 9]
console.log(checkPossibility(arr))
console.timeEnd('starting')

/**
 * @param {number[]} nums
 * @return {boolean}
 */
console.time('starting')
var checkPossibility = function(nums) {
  var length = nums.length
  var result = ''
  for (var i = 0; i < length; i++) {
    if (nums[i] > nums[i + 1]) {
      index = i
      if (nums[i - 1] > nums[i + 1]) {
        console.log('B')
        result = funB(nums)
      } else {
        console.log('A')
        result = funA(nums)
      }
      return result
    }
  }
  return true
}

var funA = function(nums) {
  var length = nums.length
  var index = 0
  var valueOfIndex = ''
  var index1 = 0
  var valueOfIndex1 = ''
  var result = []

  myloop1: for (var i = 0; i < length; i++) {
    if (nums[i] > nums[i + 1]) {
      index = i
      valueOfIndex = nums[i]
      break myloop1
    }
  }
  if (index === 0 && valueOfIndex === '') {
    return true
  }

  for (var j = 0; j < length; j++) {
    if (index !== j && nums[index] <= nums[j]) {
      index1 = j - 1
      valueOfIndex1 = nums[index1]
      break
    }
  }

  if (index1 === 0 && valueOfIndex1 === '') {
    index1 = length - 1
  }
  for (var k = 0; k < length; k++) {
    if (k < index) {
      result[k] = nums[k]
    }
    if (k >= index && k < index1) {
      result[k] = nums[k + 1]
    }
    if (k > index1) {
      result[k] = nums[k]
    }
  }
  result[index1] = valueOfIndex
  for (var l = 0; l < length; l++) {
    if (result[l] > result[l + 1]) {
      return false
    }
  }
  return true
}

var funB = function(nums) {
  var length = nums.length
  var index = 0
  var valueOfIndex = ''
  var index1 = 0
  var valueOfIndex1 = ''
  var result = []

  myloop1: for (var i = 0; i < length; i++) {
    if (nums[i] > nums[i + 1]) {
      index = i + 1
      valueOfIndex = nums[i + 1]
      break myloop1
    }
  }
  if (index === 0 && valueOfIndex === '') {
    return true
  }

  for (var j = 0; j < length; j++) {
    if (index !== j && nums[index] <= nums[j]) {
      index1 = j
      valueOfIndex1 = nums[index1]
      break
    }
  }

  if (index1 === 0 && valueOfIndex1 === '') {
    index1 = length - 1
  }
  for (var k = 0; k < length; k++) {
    if (k < index1) {
      result[k] = nums[k]
    }
    if (k >= index1 && k < index) {
      result[k + 1] = nums[k]
    }
    if (k > index) {
      result[k] = nums[k]
    }
  }
  result[index1] = valueOfIndex1

  for (var l = 0; l < length; l++) {
    if (result[l] > result[l + 1]) {
      return false
    }
  }
  return true
}
// let arr = [2, 4, 4, 2, 4]
// let arr = [1, 2, 3]
let arr = [4, 2, 3]
// let arr = [1, 5, 4, 6, 7, 8, 9]
console.log(checkPossibility(arr))
console.timeEnd('starting')

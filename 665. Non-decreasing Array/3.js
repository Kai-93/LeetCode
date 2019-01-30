/**
 * @param {number[]} nums
 * @return {boolean}
 */

console.time('starting')

var checkPossibility = function(nums) {
  var length = nums.length
  var count = 0
  for (var i = 0; i < length - 1 && count <= 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (i > 0) {
        if (nums[i - 1] > nums[i + 1]) {
          nums[i + 1] = nums[i]
        } else {
          nums[i] = nums[i - 1]
        }
      }
      count++
    }
  }
  return count <= 1
}

// let arr = [2, 4, 4, 2, 4]
// let arr = [3, 2, 3, 2, 4]
// let arr = [1, 2, 3]
let arr = [4, 2, 1]
// let arr = [3, 4, 2, 3]
// let arr = [1, 5, 4, 6, 7, 10, 8, 9]
console.log(checkPossibility(arr))
console.timeEnd('starting')

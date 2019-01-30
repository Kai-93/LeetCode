/**
 * @param {number[]} nums
 * @return {number}
 */
console.time('starting')
var maxSubArray = function(nums) {
  var length = nums.length
  var sum = nums[0]
  var max = nums[0]
  for (var i = 1; i < length; i++) {
    sum = nums[i] + (sum > 0 ? sum : 0)
    if (sum > max) max = sum
  }
  return max
}

var arr = require('./arr').arr
// var arr = [-2, 1]
console.log(maxSubArray(arr))
console.timeEnd('starting')

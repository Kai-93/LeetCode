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
    var temp = sum + nums[i]
    if (nums[i] > temp) {
      sum = nums[i]
    } else {
      sum = temp
    }
    if (sum > max) {
      max = sum
    }
  }
  return max
}

var arr = require('./arr').arr
// var arr = [-2, 1]
console.log(maxSubArray([0]))
console.timeEnd('starting')

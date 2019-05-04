/**
 * Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
 * @param {number[]} nums
 * @return {number}
 */

console.time('starting')
var thirdMax = function(nums) {
  var length = nums.length
  var one = nums[0]
  var two = -Math.min()
  var three = -Math.min()
  for (var i = 1; i < length; i++) {
    if (nums[i] > one) {
      three = two
      two = one
      one = nums[i]
    } else if (two < nums[i] && nums[i] < one) {
      three = two
      two = nums[i]
    } else if (three < nums[i] && nums[i] < two) {
      three = nums[i]
    }
  }
  return three > -Math.min() ? three : one
}
var arr = [2, 2, 3, 1]

console.log(thirdMax(arr))
console.timeEnd('starting')

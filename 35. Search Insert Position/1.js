/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
console.time('starting')
var searchInsert = function(nums, target) {
  var length = nums.length
  for (var i = 0; i < length; i++) {
    if (nums[i] >= target) return i
  }
  return length
}

console.log(searchInsert([1, 3, 5, 6], 0))
console.timeEnd('starting')

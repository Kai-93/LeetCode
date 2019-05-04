/**
 * @param {number[]} nums
 * @return {number}
 */
console.time('starting')
var removeDuplicates = function(nums) {
  var index = 0
  for (var i = 1; i < nums.length; i++) {
    if (nums[index] !== nums[i]) {
      index++
      nums[index] = nums[i]
    }
  }
  return index + 1
}
console.log(removeDuplicates([1,2,4]))
console.timeEnd('starting')

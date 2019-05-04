/**
 * Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
console.time('starting')
var findPairs = function(nums, k) {
  if (k < 0) return 0
  var length = nums.length
  var count = new Set()
  var set = new Set()
  for (var i = 0; i < length; i++) {
    if (set.has(nums[i] + k)) count.add(nums[i] + k)
    if (set.has(nums[i] - k)) count.add(nums[i])
    set.add(nums[i])
  }
  return count.size
}
var nums = [1, 1, 1, 2, 1]
var k = 1
console.log(findPairs(nums, k))
console.timeEnd('starting')

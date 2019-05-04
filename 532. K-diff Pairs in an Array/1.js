/**
 * Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
console.time('starting')
var findPairs = function(nums, k) {
  var length = nums.length
  var count = 0
  var result = []
  for (var i = 0; i < length; i++) {
    var subtracted = nums[i]
    for (var j = i + 1; j < length; j++) {
      var sum = subtracted + nums[j]
      if (k === Math.abs(subtracted - nums[j]) && !result.includes(sum)) {
        count++
        result.push(sum)
      }
    }
  }
  return count
}
var nums = [3, 1, 4, 1, 5]
var k = 2
console.log(findPairs(nums, k))
console.timeEnd('starting')

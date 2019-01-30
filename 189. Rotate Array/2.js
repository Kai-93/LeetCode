/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
console.time('starting')
var rotate = function(nums, k) {
  var length = nums.length
  nums.unshift(...nums.splice(length - k, length))
}
var arr = [1, 2, 3, 4, 5, 6, 7]
var k = 3
console.log(rotate(arr, k))
console.timeEnd('starting')

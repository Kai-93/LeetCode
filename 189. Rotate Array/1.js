/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
console.time('starting')
var rotate = function(nums, k) {
  while (k) {
    nums.unshift(nums.pop())
    k--
  }
  return nums
}
var arr = [-1, -100, 3, 99]
var k = 2
console.log(rotate(arr, k))
console.timeEnd('starting')

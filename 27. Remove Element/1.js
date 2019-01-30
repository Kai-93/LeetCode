/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
console.time('starting')
var removeElement = function(nums, val) {
  var i = 0
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i = 0
      continue
    }
    i++
  }
  return nums.length
}

console.log(removeElement([2, 2], 2))
console.timeEnd('starting')

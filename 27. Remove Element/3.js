/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
console.time('starting')
let removeElement = function(nums, val) {
  let i = 0
  let length = nums.length
  while (i < length) {
    if (nums[i] === val) {
      nums[i] = nums[length - 1]
      length--
      continue
    }
    i++
  }
  return length
}

console.log(removeElement([2, 2], 2))
console.timeEnd('starting')

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
console.time('starting')
let removeElement = function(nums, val) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i]
      j++
    }
  }
  return j
}

console.log(removeElement([2, 2], 2))
console.timeEnd('starting')

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
console.time('用时')
var twoSum = function (nums, target) {
	var arr = []
	var len = nums.length
	var i = 0
	var j = 0
	for (; i < len; i++) {
		for (j = i + 1; j < len; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
}
console.log(twoSum([2, 7, 11, 15], 26))
console.timeEnd('用时')

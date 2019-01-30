/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (points.length === 0) {
    return 0
  }
  var arr = [points[0]]
  var len = points.length
  for (var i = 1; i < len; i++) {
    for (var j = 0; j < arr.length; j++) {
      var point_one = points[i]
      var point_two = arr[j]
      // 不重叠
      if (point_one[0] > point_two[1] || point_one[1] < point_two[0]) {
        if (j === arr.length - 1) {
          arr.push(points[i])
          break
        }
        continue
      }
      // 有重叠
      arr[j][0] = point_one[0] >= point_two[0] ? point_one[0] : point_two[0]
      arr[j][1] = point_one[1] >= point_two[1] ? point_two[1] : point_one[1]
      break
    }
  }
  return arr
}
var result = findMinArrowShots([
  [3, 9],
  [7, 12],
  [3, 8],
  [6, 8],
  [9, 10],
  [2, 9],
  [0, 9],
  [3, 9],
  [0, 6],
  [2, 8]
])
console.log(result)

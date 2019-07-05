// 高度检查器
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  var arr = []
  heights.forEach((item) => {
    typeof arr[item] === 'number' ? arr[item]++ : arr[item] = 1
  })
  var count = 0
  for (var i = 1, j = 0; i < arr.length; i++) {
    while (arr[i]-- > 0) {
      if (heights[j++] != i) count++
    }
  }
  return count;
};
console.log(heightChecker([1,1,4,2,1,3]))
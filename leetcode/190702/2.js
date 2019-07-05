// 728 自除数
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  var arr = []
  for (var i = left; i <= right; i++) {
    var isSelf = true
    for (var j = 0; j < (i + '').length; j++) {
      if (i % (i + '')[j] !== 0 || (i + '')[j] === 0) isSelf = false
    }
    if (isSelf) arr.push(i)
  }
  return arr
};
console.log(selfDividingNumbers(1, 22))
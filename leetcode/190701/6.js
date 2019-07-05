// 机器人移动

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  var arr = [0, 0]
  for (var i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'L':
        arr[0] -= 1
        break;
      case 'R':
        arr[0] += 1
        break;
      case 'U':
        arr[1] -= 1
        break;
      case 'D':
        arr[1] += 1
        break;
      default:
        arr[0] = 6
        break
    }
  }
  return arr[0] === 0 && arr[1] === 0
};

console.log(judgeCircle('LL'))

// 解法 2

var judgeCircle2 = function (moves) {
  if (moves.length % 2 === 1) return false
  var obj = {
    L: 0,
    R: 0,
    U: 0,
    D: 0
  }
  for (var i = 0; i < moves.length; i ++) {
    obj[moves[i]]++
  }
  return obj.L === obj.R && obj.U === obj.D
}
console.log(judgeCircle2('UD'))
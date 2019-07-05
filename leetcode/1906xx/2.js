// 宝石与石头
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var obj = {}
  var num = 0
  for (var i = 0; i < J.length; i ++) {
    obj[J[i]] = true
  }
  for (var i = 0; i < S.length; i ++) {
    if (obj[S[i]]) num ++
  }
  return num
};

console.log(numJewelsInStones('z', 'ZZ'));
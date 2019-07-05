// 增减字符串匹配
/**
 * @param {string} S
 * @return {number[]}
 */

var diStringMatch = function (S) {
  let a = 0;
  let b = S.length;
  let c = S + S[S.length - 1]
  return c.split('').map((x) => {
    return x == 'I' ? a++ : b--
  })
}
console.log(diStringMatch('IDID'))
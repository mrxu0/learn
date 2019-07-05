// 删除最外层的括号
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    var num = 0
    var str = ''
    for (let i = 0; i < S.length; i++) {
      const element = S[i]
      if (S[i] === '(') {
        if (++num > 1) str += '('
      } else {
        if (--num > 0) str += ')'
      }
    }
    return str
}

console.log(removeOuterParentheses('(()())(())'))
// 唯一摩尔斯密码词
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    var set = new Set()
    words.forEach(element => {
      var str = ''
      for (let i = 0; i < element.length; i++) {
        str += morse[element[i].charCodeAt() - 97]
      }
      set.add(str)
    });
    return set.size
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
// 有序数组的平方
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map((item) => item * item).sort((a, b) => a - b)
};

console.log(sortedSquares([-20,-19,-14,-12,-7,-5,2,2,4,6,6,7,8,9,10,12,17,17,18,18]))
// console.log(sortedSquares([-4,-1,0,3,10]))
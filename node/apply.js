/**
 * 作用: 能够改变 this 指向
 * 方式: function.apply(thisObj, [arg1, arg2, ...])
 */

function a () {
  console.log(this.a, arguments)
}
var b = {a: 100, c: 200}

// 原始用法
// a.apply(b, [1, 2])
// a.apply(b)

/**
 * 核心思想如下
 * a.apply(b, [1, 2]) => b.__fn([1, 2])
 * b.__fn === a
 * 
 * 依照核心思想进行实现
 */
Function.prototype.myApply = function (contextt) {
  var context = contextt || window
  context.__fn = this
  var args = arguments[1] || []
  context.__fn(...args)
  delete context.__fn
}
a.myApply(b) //100

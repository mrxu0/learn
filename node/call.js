/**
 * 作用: 能够改变 this 指向
 * 方式: function.call(thisObj, arg1, arg2, ...)
 */

function a () {
  console.log(this.a)
}
var b = {a: 100, c: 200}

// 原始用法
// a.call(b, 1, 2)

/**
 * 核心思想如下
 * a.call(b, 1, 2) => b.__fn(1, 2)
 * b.__fn === a
 * 
 * 依照核心思想进行实现
 */
Function.prototype.myCall = function (context) {
  var context = context || window
  context.__fn = this
  var args = [...arguments].slice(1)
  context.__fn(...args)
  delete context.__fn
}
a.myCall(b) //100
a() // undefined
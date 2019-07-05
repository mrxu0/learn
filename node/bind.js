/**
 * 作用: 能够改变 this 指向
 * 方式: function.bind(thisObj, arg1, arg2, ...)
 */

 var a = {
   b: 100,
   fun: function () {
     console.log('b', this.b)
   }
 }
 var b = {
   b: 50
 }
//  a.fun() // 100
//  a.fun.bind(b)() // 50

 Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
a.fun.myBind(b)()

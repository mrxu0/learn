// 尾递归, 通常的递归会消耗大量空间，而尾递归只占用 O(1) 的空间

// 斐波那契列数
function Fibinacci(n, def1 = 1, def2 = 1) {
  if (n <= 1) return def2
  return Fibinacci(n - 1, def2, def1 + def2)
}

// console.log(Fibinacci(100)) // 573147844013817200000
// console.log(Fibinacci(10000)) // 算不出来，目前我的 node 环境还不支持尾递归

// 使用蹦床函数实现尾递归
function trampoline(f) {
  while (f && f instanceof Function) {
    f = f();
  }
  return f;
}
function Fibinacci1(n, def1 = 1, def2 = 1) {
  if (n <= 1) return def2
  return Fibinacci1.bind(null, n - 1, def2, def1 + def2)
}
// console.log('trampoline', trampoline(Fibinacci1(10000)))

// 蹦床函数并不是真正的尾递归优化，下面的实现才是。
// 巧妙的运用了 active 的状态管理和代码的执行顺序。当 active = true 的时候代表递归开始。while 中以数组的长度作为
// 终结条件，因为 active 变成了 true 所以第二次执行的时候都会往数组里添加参数返回 undefined 。接着重新判断 while
// 恰巧数组是有数据的以此往返知道最终结果出现
function tco(f) {
  var value;
  var active = false;
  var accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  };
}

let Fibinacci2 = tco(function (n, def1 = 1, def2 = 1) {
  if (n <= 1) return def2
  return Fibinacci2(n - 1, def2, def1 + def2)
})

console.log('tco', Fibinacci2(4))
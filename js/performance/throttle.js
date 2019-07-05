function throttle(fn, delay) {
  let time = false, lastTime = 0
  return function () {
    if (time) return
    let that = this, arg = arguments
    let fun = function() {
      time = false
      lastTime = Date.now()
      fn.apply(that, arg)
    }
    if(Date.now() - lastTime > delay) {
      fun()
    } else {
      time = setTimeout(() => {
        fun()
      }, delay);
    }
  }
}
let a = throttle(function () {
  console.log(1)
}, 1000)
a()
a()
a()
a()
a()
a()
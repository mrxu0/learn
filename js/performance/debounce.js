function debounce(fn, delay) {
  let time = false
  return function () {
    if (time) clearTimeout(time)
    let that = this, arg = arguments
    let fun = function() {
      time = false
      fn.apply(that, arg)
    }
    time = setTimeout(() => {
      fun()
    }, delay);
  }
}
let a = debounce(function (a) {
  console.log(a)
}, 1000)
a()
a()
a()
a()
a()
a()
setTimeout(() => {
  a(1)
}, 2000);
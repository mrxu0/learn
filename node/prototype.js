function A () {}

// A.prototype.constructor = 2

var b = new A()
console.log('0', b)
console.log('1', b.__proto__)
console.log('2', b.prototype)
console.log('3', b.constructor)
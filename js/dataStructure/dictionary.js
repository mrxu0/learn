class Dictionary {
  constructor() {
    this.items = {}
  }

  has(key) {
    return key in this.items
  }

  set(key, value) {
    this.items[key] = value
  }

  delete(key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }
    return false
  }

  get(key) {
    return this.has(this.items[key]) ? this.items[key] : undefined
  }

  values() {
    let values = []
    for (let item in this.items) {
      if (this.has(item)) {
        values.push(this.items[item])
      }
    }
    return values
  }

  keys() {
    return Object.keys(this.items)
  }

  getItems() {
    return this.items
  }
}


var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.keys());
console.log(dictionary.values());
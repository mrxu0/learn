class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkList {
  constructor() {
    this.length = 0
    this.head = null
  }

  append (element) {
    let node = new Node(element)
    let current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while(current.next) {
        console.log(current);
        current = current.next
      }
      current.next = node
    }
    this.length ++
  }

  insert (position, element) {

  }

  remove (element) {

  }

  indexOf (element) {

  }

  isEmpty () {

  }
}

let link = new LinkList()

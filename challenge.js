class Stack {
  constructor() {
    this.list = []
  }
  push(number) {
    this.list.push(number)
  }

  pop() {
    return this.list.pop()
  }

  min() {
    let minVal = this.list[0]
    for (let i = 0; i < this.list.length; i++) {
      let val = this.list[i]
      if (val <= minVal) {
        minVal = val
      }
    }
    return minVal
  }
}

// I get the correct answers locally but Github keeps grading me wrong!

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack

// Inheriting Event Emitters
const { EventEmitter } = require('events')

class MyEmitter extends EventEmitter {
  greet() {
    this.emit('greet')
  }
}

class MySubEmitter extends MyEmitter {
  constructor() {
    super()
    this.on('greet', () => {
      console.log('Hello, world!')
    })
  }
}

const mySubEmitter = new MySubEmitter()
mySubEmitter.greet()

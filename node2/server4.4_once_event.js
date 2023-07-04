// Once Event
const { EventEmitter } = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.once('greet', () => {
  console.log('Hello, world!')
})

eventEmitter.emit('greet')
eventEmitter.emit('greet') // No output

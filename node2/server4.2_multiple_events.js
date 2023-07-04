// Multiple Event Listeners:
const { EventEmitter } = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('greet', () => {
  console.log('Hello!')
})

eventEmitter.on('greet', () => {
  console.log('World!')
})

eventEmitter.emit('greet')

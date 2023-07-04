// Event with Arguments
const { EventEmitter } = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('sum', (a, b) => {
  console.log(`The sum of ${a} and ${b} is ${a + b}.`)
})

eventEmitter.emit('sum', 5, 7)

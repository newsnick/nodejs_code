// Event Emitter with asyncFunction
const { EventEmitter } = require('events')

function asyncFunction() {
  const eventEmitter = new EventEmitter()

  setTimeout(() => {
    eventEmitter.emit('success', 'Operation completed successfully.')
  }, 2000)

  return eventEmitter
}

const operation = asyncFunction()

operation.on('success', (message) => {
  console.log(message)
})

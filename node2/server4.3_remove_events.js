// Removing Event Listeners
const { EventEmitter } = require('events')

const eventEmitter = new EventEmitter()

const greetHandler = () => {
  console.log('Hello!')
}

eventEmitter.on('greet', greetHandler)

eventEmitter.emit('greet') // Outputs: Hello!

eventEmitter.removeListener('greet', greetHandler)

eventEmitter.emit('greet') // No output

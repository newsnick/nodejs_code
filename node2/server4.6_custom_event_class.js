// Custom Event Emitter Class
const { EventEmitter } = require('events')

class MyEmitter extends EventEmitter {
  logMessage(message) {
    console.log(`Log: ${message}`)
    this.emit('logged', message)
  }
}

const myEmitter = new MyEmitter()

myEmitter.on('logged', (message) => {
  console.log(`Message logged: ${message}`)
})

myEmitter.logMessage('Hello, world!')

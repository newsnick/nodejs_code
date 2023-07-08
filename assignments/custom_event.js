const { EventEmitter } = require('events')

class MyCustomEmitter extends EventEmitter {
  logMessage(message) {
    console.log(`Log: ${message}`)
    this.emit('logged', message)
    this.emit('pass')
    this.emit('sum', 100, 200)
  }
}

const myCustomEmitter = new MyCustomEmitter()

myCustomEmitter.on('pass', () => {
  console.log('How to pass')
})

myCustomEmitter.on('pass', () => {
  console.log('your next exam')
})

myCustomEmitter.on('sum', (a, b) => {
  console.log(
    `minimum points required: exam a = ${a} and exam b = ${b} total points = ${
      a + b
    }`
  )
})

myCustomEmitter.once('onceEvent', () => {
  console.log('submitting your exam! See results below')
})

const errorHandler = (error) => {
  console.error('Sorry:', error)
}

myCustomEmitter.on('error', errorHandler)

myCustomEmitter.logMessage('Pass Exam!')

myCustomEmitter.emit('onceEvent')
myCustomEmitter.emit('onceEvent')

myCustomEmitter.emit('error', new Error('You didn`t pass the exam!'))

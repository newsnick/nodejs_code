// Error Event
const { EventEmitter } = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('error', (error) => {
  console.error(`An error occurred: ${error.message}`)
})

try {
  throw new Error('Something went wrong.')
} catch (error) {
  eventEmitter.emit('error', error)
}

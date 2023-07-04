//Basic Event Emitter
const { EventEmitter } = require('events') //events is a built in module

//This instance will be used to emit events and handle event listeners.
const eventEmitter = new EventEmitter()

//Registers an event listener for the 'greet' event.
eventEmitter.on('greet', () => {
  console.log('Hello, world!')
})

//The emit method is used to trigger an event.
//When an event is emitted, all registered listeners for that event will be invoked.
eventEmitter.emit('greet')

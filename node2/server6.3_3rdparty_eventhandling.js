// event handling on http request
const http = require('http')
const { EventEmitter } = require('events')

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter()

const server = http.createServer((request, response) => {
  const url = request.url
  if (url !== '/favicon.ico') {
    response.write('Hello, Node JS!\n')
    console.log(`http://${request.headers.host}${request.url}`)
    response.end()
    // Emit a 'request' event
    eventEmitter.emit('request', url)
  }
})

server.listen(8080, () => {
  console.log('Server is listening on port 8080')
})

// Listen for the 'request' event
eventEmitter.on('request', (url) => {
  console.log(`Relative URL: ${url}`)
})

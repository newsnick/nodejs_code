//"url" module : extract the query parameters.
var http = require('http')
const url = require('url')
const server = http.createServer((request, response) => {
  const queryObject = url.parse(request.url, true).query //extract query parameters.
  const name = queryObject.name
  const age = queryObject.age

  // Use the parameters to generate the response
  response.setHeader('Content-Type', 'text/plain')
  response.write(`Hello, ${name}! You are ${age} years old.`)
  response.end()
})

server.listen(8080, () => {
  console.log('Server is listening on port 3000')
})

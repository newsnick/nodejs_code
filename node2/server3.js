var http = require('http')
http
  .createServer(function (request, response) {
    response.write('Its a server response from arrow function')
    response.end()
  })
  .listen(8081)
console.log('Server is running at http://127.0.0.1:8081/')

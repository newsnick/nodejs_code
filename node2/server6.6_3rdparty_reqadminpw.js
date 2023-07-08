var http = require('http')
const url = require('url')

const server = http.createServer((request, response) => {
  const queryObject = url.parse(request.url, true).query
  const username = queryObject.username
  const password = queryObject.password

  response.writeHead(200, { 'Content-Type': 'text/html' })
  if (username == 'admin' && password == 'admin')
    response.write('<h3>Login Success.</h3>')
  else response.write('<h3>Login Failed...</h3>')
  response.end() //lock response obejct.
})

server.listen(8080, () => {
  console.log('Server is listening on port 8080')
})

// request url - http://localhost:8080/?username=admin&password=admin

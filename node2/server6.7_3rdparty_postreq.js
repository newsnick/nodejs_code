// Post request
// req.on method is a call back method invoke on certain event.
// req.on("data" , . .) method is used to handle the incoming data from the request.
// req.on("end", () => {...}) method is used to listen for the 'end' event of the incoming request.
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  let body = ''
  req.on('data', (data) => {
    //data event listen request body.
    body = body + data
  })
  //console.log(body); // this will trigger even before request body will not recieve completely.
  // for that reason we have end event .
  req.on('end', () => {
    //end event trigger once request will completely recieved.
    console.log(body)
    const query = url.parse(req.url, true).query
    const username = query.username
    const password = query.password
    if (username == 'admin' && password == 'admin')
      res.write('<h3>Login Success.</h3>')
    else res.write('<h3>Login Failed...</h3>')
    res.end()
  })
})

server.listen(8080, () => {
  console.log('Server is listening on port 8080')
})

// to run program use-
// request url - http://localhost:8080/?username=admin&password=admin

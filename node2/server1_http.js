var http = require('http')
function serverConfig(request, response) {
  response.write('Its a server response.')
  response.end()
}
http.createServer(serverConfig).listen(8081)
console.log('Server is running at http://127.0.0.1:8081/')

/*
HTTP server is predefine module use to create http server.
http server default available in npm engine as it is predefine module.
*/

/*
request and response are predefine objects in node engine.
end is predefine function in response object use to lock response.
*/

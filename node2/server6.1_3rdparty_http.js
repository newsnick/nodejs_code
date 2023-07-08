// Commonly use 3rd party modules in node js.

// Express.js: A minimalistic web framework for building web applications and APIs quickly and easily.
// Axios: A popular HTTP client for making requests to external APIs or fetching data from servers.
// Mongoose: An object modeling tool for MongoDB that simplifies data validation, querying, and interaction with the database.
// bcrypt: A module for hashing passwords securely, commonly used for user authentication and password storage.
// Winston (Logging library)
// Node-cron (Job scheduler)

// HTTP SERVER -
// implements request and response methods
const http = require('http')
const server = http.createServer((request, response) => {
  const url = request.url
  const method = request.method
  const headers = request.headers

  // Log request details
  console.log('URL:', url)
  console.log('Method:', method)
  console.log('Headers:', headers)

  // Setting response headers

  response.writeHead(201, { 'Content-Type': 'text/plain' })
  response.write('Hello, World!\n')

  // Handling different URL paths
  if (url === '/') {
    response.write('You are at the root path.\n')
  } else if (url === '/about') {
    response.write('This is the About page.\n')
  } else {
    response.write('Page not found.\n')
  }
  // Sending the response
  response.end()
})

server.listen(8080, () => {
  console.log('Server is listening on port 8080')
})

//export one middle ware function with paramaters.
//calling chain of middle ware functions.
const express = require('./node_modules/express')
const authmiddleware = require('./custom_modules/middleware')
const app = express()
const PORT = 9090

//1.  request url - http://localhost:9090/
// app.use(authmiddleware({ uname: 'admin', pword: 'admin@123' }));  //change this and restart app, will get auth fail.

//2. request url - http://localhost:9090/?uname=admin&pword=admin@123
// add one more middleware function in chain.

app.use((req, res, next) => {
  const { uname, pword } = req.query
  authmiddleware({ uname, pword })(req, res, next)
})

app.get('/', (req, res) => {
  res.send('<h3>Welcome to Home page.</h3>')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

// 2nd implementation
//app.use() registers the middleware function to be executed for every incoming request to the server.

/*
(req, res, next) passes the req, res, and next arguments of the middleware function to the next middleware authmiddleware function, 
so that it can perform the authentication check and call next() to pass control to the next middleware function in the chain.
*/

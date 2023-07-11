/*
 Express js 
 is a third party module use to develop rest api.
 It provides a set of features to build web applications and APIs easily.
 It simplifies common tasks such as routing, handling HTTP requests and responses and more.
 */

// Installation

// Create folder - expressJS project folder
// Initialize Node.js project - npm init -y
// It create a package.json file
// run command -> npm install express
// or
// yarn add express --save
//
//

//GET and POST using express module implementation
const express = require('./node_modules/express')
const app = express()
const PORT = 9090

// GET request handler
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// POST request handler
app.post('/', (req, res) => {
  res.send('resoponse from POST request!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

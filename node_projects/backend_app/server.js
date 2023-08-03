const express = require('express')
const bodyParser = require('body-parser')
const xml2js = require('xml2js')

const app = express()
const PORT = 8080
const contactRoutes = require('./app/routes/contact.routes')

// Middleware to accept JSON data
app.use(bodyParser.json())

// Middleware to accept URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }))

// Middleware to accept XML data and convert it to JSON
app.use(bodyParser.text({ type: 'application/xml' }))
app.use((req, res, next) => {
  if (req.is('application/xml')) {
    xml2js.parseString(req.body, (err, result) => {
      if (err) {
        return next(err)
      }
      req.body = result
      next()
    })
  } else {
    next()
  }
})

// Use contact routes
app.use('/contacts', contactRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

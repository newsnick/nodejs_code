const express = require('express')
const helmet = require('helmet')

const app = express()

const PORT = 3000
const studentRoutes = require('./app/routes/studentRoutes')

app.use(helmet())

// Define a middleware function to set the Content Security Policy header
const setCSPHeader = (req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline'")
  next()
}

// Apply the CSP middleware to all routes
app.use(setCSPHeader)

// Middleware to accept JSON data

app.use(express.json())

// Use student routes
app.use('/students', studentRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

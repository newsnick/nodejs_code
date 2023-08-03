// URL based security implementation
const express = require('express')
const app = express()

// Middleware to parse JSON data in the request body
app.use(express.json())

// Require and use the protected middleware for JWT authentication
const protectedMiddleware = require('./app/routes/protected')
app.use('/api', protectedMiddleware)

const authMiddleware = require('./app/routes/auth')
app.use('/api', authMiddleware)

// Require and use the student routes
const studentRoutes = require('./app/routes/student.routes')
app.use('/api/students', studentRoutes)

// Start the server
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

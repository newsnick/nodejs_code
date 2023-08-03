// implementing authentication and authorization in rest APIs
const express = require('express')
const app = express()

// Middleware to parse JSON data in the request body
app.use(express.json())

// Request and use the auth route for user login
const authRoute = require('./app/routes/auth')
app.use('/api/auth', authRoute)

// Require and use the protected middlewre for protecting routes with a valid token
const protectedMiddleware = require('./app/routes/protected')
app.use('/api', protectedMiddleware)

// require and use the student routes

const studentRoutes = require('./app/routes/student.routes')
app.use('/api/students', studentRoutes)

// Start the server
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

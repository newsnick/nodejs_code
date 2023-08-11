const express = require('express')
const cors = require('cors')

const app = express()
// Middleware to accept JSON data
app.use(express.json())
const PORT = 8080

// Enable CORS for all routes
app.use(cors())

const contactRoutes = require('./app/routes/contact.routes')

// Require and use the protected middleware for JWT authentication
const protectedMiddleware = require('./app/routes/protected')
app.use('/api', protectedMiddleware)

const authMiddleware = require('./app/routes/auth')
app.use('/api', authMiddleware)

// Use contact routes
app.use('/api/contacts', contactRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

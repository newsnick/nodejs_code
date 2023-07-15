const express = require('express')
const app = express()
const PORT = 9090
const taskRoutes = require('./app/routes/taskRoutes')

// Middleware to accept json data
app.use(express.json())

// Use task routes
app.use('/tasks', taskRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

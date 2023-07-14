const express = require('express')
const app = express()
const PORT = 8080
const studentRoutes = require('./app/routes/studentRoutes')

// Middleware to accept JSON data

app.use(express.json())

// Use student routes
app.use('/students', studentRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

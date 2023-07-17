import express, { Request, Response } from 'express'
import taskRoutes from './app/routes/taskRoutes'

const app = express()
const PORT = 9090

// Middleware to accept json data
app.use(express.json())

// Use task routes
app.use('/tasks', taskRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

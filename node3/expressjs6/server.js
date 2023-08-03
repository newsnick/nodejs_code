// implementing authentication and authprization using JWT Token
const authRoutes = require('./routes/auth')
const protectedRoutes = require('./routes/protected')
const express = require('express')
const app = express()
const PORT = 8080

// Middleware to accept JSON data
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api', protectedRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

/*

Note - 
you don`t need to provide a custom 'id' field while dealing with MongoDB. However, there are scenarios where you might need to use custom ID field:

1. When you have an external system that generates unique IDs and you want to use those IDs instead of MongoDB`s default '_id'.

2. When you are migrating data from another database system that already uses a cusom ID format and you want to maintain constistency in your app.

*/

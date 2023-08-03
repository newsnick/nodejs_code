// JWT verification middleware and allow to access endpoints with only valid token
const express = require('express')
const jwt = require('jsonwebtoken')
const secretKey = 'secret-key' // Replace this with a long random string in production

const router = express.Router()

// middleware for authorization
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access.' })
  }

  // Verify the token using the secret key
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' })
    }

    //Attach the decoded user data to the request object for further use in routes
    req.user = decoded
    next()
  })
}

// Protected route, accessible only with a valid token
router.get('/protected', authenticateToken, (req, res) => {
  res.json({
    message: 'Protected resource accessed successfully!',
    user: req.user,
  })
})

module.exports = router

/*
note - 
optional chaining operator (?.) ensures that if the Authorization header is missing or undefined, then token variable will be set to undefined as well, without causing any errors.
*/

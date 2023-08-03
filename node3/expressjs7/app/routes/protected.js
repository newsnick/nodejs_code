const express = require('express')
const jwt = require('jsonwebtoken')
const secretKey = 'secret-key' // Replace this with a long random string in production

const router = express.Router()

// Middleware for authorization
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access.' })
  }

  // Verify the token using the secret key
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: ' Invalid token' })
    }

    // Attach the decoded user data to the request object for further use in routes
    req.user = decoded
    next()
  })
}

// Middleware to protect all routes with valid token
router.use(authenticateToken)

router.get('/protected', (req, res) => {
  res.json({
    message: 'Protected resource accessed successfully!',
    user: req.user,
  })
})

module.exports = router

const express = require('express')
const jwt = require('jsonwebtoken')
const secretKey = 'secret-key'

const router = express.Router()

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access.' })
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' })
    }
    req.user = decoded
    next()
  })
}

router.use(['/contacts/:id'], authenticateToken)

module.exports = router

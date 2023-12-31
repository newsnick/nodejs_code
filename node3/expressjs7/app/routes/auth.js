const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const secretKey =
  'secret-key; // Replace this with a long random string in production'

// Dummy user data (replace this with your database or authentication logic)

const users = [
  {
    id: 1,
    username: 'user1',
    password: 'password1',
  },
  {
    id: 2,
    username: 'user2',
    password: 'password2',
  },
]

// Route for user login
router.post('/login', (req, res) => {
  const { username, password } = req.body
  const user = users.find(
    (user) => user.username === username && user.password === password
  )

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  // Create a token with the user id and sign it with the secret key
  const token = jwt.sign(
    {
      userId: user.id,
    },
    secretKey,
    { expiresIn: '1h' }
  ) // Token expires in 1 hour
  res.json({ token })
})

module.exports = router

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const secretKey = 'secret-key'

const users = [
  {
    id: 1,
    username: 'newsnick',
    password: '123456',
  },
  {
    id: 2,
    username: 'atlcontact',
    password: '123456',
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

  //Create a token with the user id and sign it with the secret key

  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '4h' }) //Token expires in 4 hour
  res.json({ token })
})

module.exports = router

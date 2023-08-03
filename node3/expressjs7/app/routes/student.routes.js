const express = require('express')
const router = express.Router()
const studentController = require('../controllers/student.controller')
const authenticateToken = require('./protected')

// Protected routes, accessible only with a valid token
router.post('/', authenticateToken, studentController.createStudent)
router.get('/', authenticateToken, studentController.getAllStudents)
router.put('/:id', authenticateToken, studentController.updateStudent)
router.delete('/:id', authenticateToken, studentController.deleteStudent)

module.exports = router

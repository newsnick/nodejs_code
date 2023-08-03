const express = require('express')
const router = express.Router()
const studentController = require('../controllers/student.controller')
const authenticateToken = require('./protected')

// Unprotected routes (no JWT authentication required)
router.get('/', studentController.getAllStudents)
router.post('/', studentController.createStudent)

// Protected routes ( require JWT authentication )
router.put('/:id', authenticateToken, studentController.updateStudent)
router.delete('/:id', authenticateToken, studentController.deleteStudent)

module.exports = router

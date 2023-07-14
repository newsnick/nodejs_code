// app/routes/studentRoutes.js
const express = require('express')
const router = express.Router()
const studentController = require('../controllers/student.controller')

router.post('/', studentController.createStudent)
router.get('/', studentController.getAllStudents)
router.put('/:id', studentController.updateStudent)
router.delete('/:id', studentController.deleteStudent)

module.exports = router

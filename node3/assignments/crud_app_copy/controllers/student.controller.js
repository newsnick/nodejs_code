const Student = require('../models/student.model.js')
const express = require('express')
const router = express.Router()

// Student insert operation
const createStudent = async (req, res) => {
  const students = req.body
  try {
    Student.create(students).then(() => {
      res.send('Student inserted successfully.')
    })
  } catch (error) {
    console.log('Error while inserting data.', error)
    res.status(500).send('Error while inserting data.')
  }
}

// Student fetch all operation
const getAllStudents = async (req, res) => {
  try {
    Student.findAll().then((students) => {
      res.send(students)
    })
  } catch (error) {
    console.log('Error while fetching data.', error)
    res.status(500).send('Error while fetching data.')
  }
}

// Student update operation
const updateStudent = async (req, res) => {
  const stId = req.params.id
  const students = req.body

  try {
    Student.update(students, { where: { id: stId } }).then(() => {
      res.send('Student data updated successfully.')
    })
  } catch (error) {
    console.log('Error while updating data.', error)
    res.status(500).send('Error while updating data.')
  }
}

// Student delete operation
const deleteStudent = async (req, res) => {
  const stId = req.params.id

  try {
    Student.destroy({ where: { id: stId } }).then(() => {
      res.send('Student deleted successfully.')
    })
  } catch (error) {
    console.log('Error while deleting data.', error)
    res.status(500).send('Error while deleting data.')
  }
}

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
}

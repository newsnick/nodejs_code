const Student = require('../models/student.model')

//Student insert operation

const createStudent = async (req, res) => {
  const { id, name, age, major, year } = req.body

  try {
    const student = await Student.create({ id, name, age, major, year })
    res.send('Student inserted successfully.')
  } catch (error) {
    console.log('Error while inserting data: ', error)
    res.status(500), send('Error while inserting data.')
  }
}

//Student fetch all operation
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    console.log('Error while fetching data:', error)
    res.status(500).send('Error while fetching data.')
  }
}

//Studend update operation
const updateStudent = async (req, res) => {
  const { id } = req.params
  const { name, age, major, year } = req.body

  try {
    const student = await Student.findOne({ where: { id } })
    if (!student) {
      return res.status(404).send('Student not found.')
    }

    student.name = name
    student.age = age
    student.major = major
    student.year = year

    await student.save()
    res.send('Student updated successfully.')
  } catch (error) {
    console.log('Error while updating student.')
  }
}

// Student delete operation

const deleteStudent = async (req, res) => {
  const { id } = req.params
  try {
    const student = await Student.findOne({ where: { id } })
    if (!student) {
      return res.status(404).send('Student not found.')
    }
    await student.destroy()
    res.send('Student deleted successfully.')
  } catch (error) {
    console.log('Error while deleting student.')
  }
}

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
}

const Student = require('../models/student.model')

// Student insert operation
// const createStudent = async (req, res) => {
//   const { name, age, major, year } = req.body

//   try {
//     const student = await Student.create({ name, age, major, year })
//     res.send('Student inserted successfully.')
//   } catch (error) {
//     console.log('Error while inserting data:', error)
//     res.status(500).send('Error while inserting data.')
//   }
// }

const createStudent = async (req, res) => {
  const studentsData = req.body // Array of student data objects

  try {
    // Using insertMany to create multiple students in bulk
    const students = await Student.insertMany(studentsData)
    res.send('Students inserted successfully.')
  } catch (error) {
    console.log('Error while inserting data:', error)
    res.status(500).send('Error while inserting data.')
  }
}

// Student fetch all operation
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find()
    res.send(students)
  } catch (error) {
    console.log('Error while fetching data:', error)
    res.status(500).send('Error while fetching data.')
  }
}

// Student update operation
const updateStudent = async (req, res) => {
  const { id } = req.params
  const { name, age, major, year } = req.body

  try {
    const student = await Student.findByIdAndUpdate(
      id,
      { name, age, major, year },
      { new: true }
    )
    if (!student) {
      return res.status(404).send('Student not found.')
    }
    res.send('Student updated successfully.')
  } catch (error) {
    console.log('Error while updating student:', error)
    res.status(500).send('Error while updating student.')
  }
}

// Student delete operation
const deleteStudent = async (req, res) => {
  const { id } = req.params

  try {
    const student = await Student.findByIdAndDelete(id)
    if (!student) {
      return res.status(404).send('Student not found.')
    }
    res.send('Student deleted successfully.')
  } catch (error) {
    console.log('Error while deleting student:', error)
    res.status(500).send('Error while deleting student.')
  }
}

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
}

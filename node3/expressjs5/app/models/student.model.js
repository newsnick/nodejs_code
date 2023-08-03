const mongoose = require('../db-config/db-connection')

// Student schema definition
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
})

// Student model creation
const Student = mongoose.model('Student', studentSchema)

module.exports = Student

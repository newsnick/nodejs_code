// // module.exports = router
// const express = require('express')
// const connectionFactory = require('../db-config/db-connection')

// var router = express.Router()
// var connectionPromise = connectionFactory.getConnection()

// router.put('/:stId', function (req, res) {
//   var stId = req.params.stId
//   var students = req.body

//   // Check if any parameters are undefined
//   if (
//     typeof students.name === 'undefined' ||
//     typeof students.age === 'undefined' ||
//     typeof students.major === 'undefined' ||
//     typeof students.year === 'undefined'
//   ) {
//     console.log('Invalid request body.')
//     res.status(400).send('Invalid request body.')
//     return
//   }

//   connectionPromise
//     .then((connection) => {
//       connection
//         .execute(
//           'UPDATE students SET name = ?, age = ?, major = ?, year = ? WHERE id = ?',
//           [students.name, students.age, students.major, students.year, stId]
//         )
//         .then(() => {
//           res.send('Student data updated successfully.')
//         })
//         .catch((error) => {
//           console.log('Error while updating data.', error)
//           res.status(500).send('Error while updating data.')
//         })
//     })
//     .catch((error) => {
//       console.error('Unable to establish a database connection:', error)
//       res.status(500).send('Unable to establish a database connection.')
//     })
// })

// module.exports = router

const express = require('express')
const { sequelize } = require('../db-config/db-connection')
const Sequelize = require('sequelize')

const router = express.Router()
const Student = sequelize.define(
  'student',
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
    major: Sequelize.STRING,
    year: Sequelize.INTEGER,
  },
  {
    timestamps: false, // Disable timestamps
  }
)

router.put('/:stId', function (req, res) {
  const stId = req.params.stId
  const students = req.body

  Student.update(students, { where: { id: stId } })
    .then(() => {
      res.send('Student data updated successfully.')
    })
    .catch((error) => {
      console.log('Error while updating data.', error)
      res.status(500).send('Error while updating data.')
    })
})

module.exports = router

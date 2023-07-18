// const express = require('express')
// const connectionFactory = require('../db-config/db-connection')

// var router = express.Router()
// var connectionPromise = connectionFactory.getConnection()

// router.delete('/:stId', function (req, res) {
//   var stId = req.params.stId

//   connectionPromise
//     .then((connection) => {
//       connection
//         .execute('DELETE FROM students WHERE id = ?', [stId])
//         .then(() => {
//           res.send('Student deleted successfully.')
//         })
//         .catch((error) => {
//           console.log('Error while deleting data.', error)
//           res.status(500).send('Error while deleting data.')
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

router.delete('/:stId', function (req, res) {
  const stId = req.params.stId

  Student.destroy({ where: { id: stId } })
    .then(() => {
      res.send('Student deleted successfully.')
    })
    .catch((error) => {
      console.log('Error while deleting data.', error)
      res.status(500).send('Error while deleting data.')
    })
})

module.exports = router

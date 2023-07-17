// module.exports = router
const express = require('express')
const connectionFactory = require('../db-config/db-connection')

var router = express.Router()
var connectionPromise = connectionFactory.getConnection()

router.put('/:stId', function (req, res) {
  var stId = req.params.stId
  var students = req.body

  // Check if any parameters are undefined
  if (
    typeof students.name === 'undefined' ||
    typeof students.age === 'undefined' ||
    typeof students.major === 'undefined' ||
    typeof students.year === 'undefined'
  ) {
    console.log('Invalid request body.')
    res.status(400).send('Invalid request body.')
    return
  }

  connectionPromise
    .then((connection) => {
      connection
        .execute(
          'UPDATE students SET name = ?, age = ?, major = ?, year = ? WHERE id = ?',
          [students.name, students.age, students.major, students.year, stId]
        )
        .then(() => {
          res.send('Student data updated successfully.')
        })
        .catch((error) => {
          console.log('Error while updating data.', error)
          res.status(500).send('Error while updating data.')
        })
    })
    .catch((error) => {
      console.error('Unable to establish a database connection:', error)
      res.status(500).send('Unable to establish a database connection.')
    })
})

module.exports = router

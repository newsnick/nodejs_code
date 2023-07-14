const express = require('../node_modules/express')
const connectionFactory = require('../db-config/db-connection')

var connection = connectionFactory.getConnection()
connection.connect()

var router = express.Router()

router.put('/:stId', function (req, res) {
  var stId = req.params.stId
  var students = req.body

  connection.query(
    'UPDATE students SET name = ?, age = ?, major = ?, year = ? WHERE id = ?',
    [students.name, students.age, students.major, students.year, stId],
    function (err, result) {
      if (err) {
        console.log('Error while updating data.' + err)
        res.status(500).send('Error while updating data.')
      } else {
        res.send('Student data updated successfully.')
      }
    }
  )
})

module.exports = router

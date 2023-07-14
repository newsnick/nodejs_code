const express = require('../node_modules/express')
const connectionFactory = require('../db-config/db-connection')

var connection = connectionFactory.getConnection()
connection.connect()

var router = express.Router()

router.delete('/:stId', function (req, res) {
  var stId = req.params.stId

  connection.query(
    'DELETE FROM students WHERE id = ?',
    [stId],
    function (err, result) {
      if (err) {
        console.log('Error while deleting data.', err)
        res.status(500).send('Error while deleting data.')
      } else {
        res.send('Student deleted successfully.')
      }
    }
  )
})
module.exports = router

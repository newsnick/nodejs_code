const express = require('../node_modules/express')
const connectionFactory = require('../db-config/db-connection')

var connection = connectionFactory.getConnection()
connection.connect()

var router = express.Router()

router.delete('/:empId', function (req, res) {
  var empId = req.params.empId

  connection.query(
    'DELETE FROM employee WHERE id = ?',
    [empId],
    function (err, result) {
      if (err) {
        console.log('Error while deleting data.', err)
        res.status(500).send('Error while deleting data.')
      } else {
        res.send('Enmployee deleted successfully.')
      }
    }
  )
})
module.exports = router

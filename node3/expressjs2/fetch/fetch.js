const express = require('../node_modules/express')
const connectionFactory = require('../db-config/db-connection')

var connection = connectionFactory.getConnection()
connection.connect()

var router = express.Router()

router.get('/', function (req, res) {
  connection.query(
    'SELECT * FROM students',
    function (err, recordArray, fields) {
      if (err) {
        console.log('Error while fetching data.')
      } else {
        res.send(recordArray)
      }
    }
  )
})

module.exports = router

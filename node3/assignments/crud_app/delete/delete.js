const express = require('express')
const connectionFactory = require('../db-config/db-connection')

var router = express.Router()
var connectionPromise = connectionFactory.getConnection()

router.delete('/:stId', function (req, res) {
  var stId = req.params.stId

  connectionPromise
    .then((connection) => {
      connection
        .execute('DELETE FROM students WHERE id = ?', [stId])
        .then(() => {
          res.send('Student deleted successfully.')
        })
        .catch((error) => {
          console.log('Error while deleting data.', error)
          res.status(500).send('Error while deleting data.')
        })
    })
    .catch((error) => {
      console.error('Unable to establish a database connection:', error)
      res.status(500).send('Unable to establish a database connection.')
    })
})

module.exports = router

const express = require('express')
const connectionFactory = require('../db-config/db-connection')

var router = express.Router()
var connectionPromise = connectionFactory.getConnection()

router.get('/', function (req, res) {
  connectionPromise
    .then((connection) => {
      connection
        .execute('SELECT * FROM students')
        .then(([rows, fields]) => {
          res.send(rows)
        })
        .catch((error) => {
          console.log('Error while fetching data.', error)
          res.status(500).send('Error while fetching data.')
        })
    })
    .catch((error) => {
      console.error('Unable to establish a database connection:', error)
      res.status(500).send('Unable to establish a database connection.')
    })
})

module.exports = router

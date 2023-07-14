const express = require('../node_modules/express')
const connectionFactory = require('../db-config/db-connection')

var connection = connectionFactory.getConnection()
connection.connect()

var router = express.Router()

router.post('/', function (req, res) {
  var students = req.body

  connection.query(
    'insert INTO STUDENTS VALUES (?, ?, ?, ?, ?)',
    [students.id, students.name, students.age, students.major, students.year],
    function (err, result) {
      if (err) {
        console.log('Error while inserting data.')
        res.status(500).send('Error while inserting data.')
      } else {
        res.send('Student inserted successfully.')
      }
    }
  )
})
module.exports = router

/*
http://localhost:9090/insert

{
        "id": "1",
        "name": "laptop",
        "price": "5000"
}
*/

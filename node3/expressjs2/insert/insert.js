const express = require('../node_modules/express')
const connectionFactory = require('../db-config/db-connection')

var connection = connectionFactory.getConnection()
connection.connect()

var router = express.Router()

router.post('/', function (req, res) {
  var employee = req.body

  connection.query(
    'insert INTO EMPLOYEE VALUES (?, ?, ?, ?, ?)',
    [
      employee.id,
      employee.name,
      employee.age,
      employee.salary,
      employee.deptID,
    ],
    function (err, result) {
      if (err) {
        console.log('Error while inserting data.')
        res.status(500).send('Error while inserting data.')
      } else {
        res.send('Employee inserted successfully.')
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

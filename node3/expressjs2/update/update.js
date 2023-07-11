const express = require('../node_modules/express')
const connectionFactory = require('../db-config/db-connection')

var connection = connectionFactory.getConnection()
connection.connect()

var router = express.Router()

router.put('/:empId', function (req, res) {
  var empId = req.params.empId
  var employee = req.body

  connection.query(
    'UPDATE employee SET name = ?, age = ?, salary = ?, deptID = ? WHERE id = ?',
    [employee.name, employee.age, employee.salary, employee.deptID, empId],
    function (err, result) {
      if (err) {
        console.log('Error while updating data.' + err)
        res.status(500).send('Error while updating data.')
      } else {
        res.send('Employee data updated successfully.')
      }
    }
  )
})

module.exports = router

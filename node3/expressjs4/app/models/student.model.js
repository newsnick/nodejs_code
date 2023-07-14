const { sequelize, DataTypes } = require('../db-config/db-connection')

//Student model definition

const Student = sequelize.define('students', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  age: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  mayor: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  year: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
})

// Synchronize the model with the Database

Student.sync()
  .then(() => {
    console.log('Synched db.')
  })
  .catch((err) => {
    console.log('Failed to synch db:' + err.message)
  })
module.exports = Student

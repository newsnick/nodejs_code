const { sequelize, DataTypes } = require('../db-config/db-connection')

// Student model definition
const Student = sequelize.define(
  'student',
  {
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
    major: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    year: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    timestamps: false, // Disable timestamps
  }
)
Student.sync()
  .then(() => {
    console.log('Synched db.')
  })
  .catch((err) => {
    console.log('Failed to synch db:' + err.message)
  })
module.exports = Student

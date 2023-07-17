const { sequelize, DataTypes } = require('../db-config/db-connection')

//Student model definition

const Student = sequelize.define(
  'new',
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
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    },
    timestamps: false,
  }
)
// Synchronize the model with the Database

Student.sync()
  .then(() => {
    console.log('Synched db.')
  })
  .catch((err) => {
    console.log('Failed to synch db:' + err.message)
  })
module.exports = Student

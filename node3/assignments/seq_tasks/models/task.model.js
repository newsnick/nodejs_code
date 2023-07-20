const { sequelize, DataTypes } = require('../db-config/db-connection')

// Student model definition
const Task = sequelize.define(
  'task',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    deadline: {
      type: DataTypes.DATE,
      primaryKey: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      primaryKey: true,
    },
  },
  {
    timestamps: false, // Disable timestamps
  }
)
Task.sync()
  .then(() => {
    console.log('Synched db.')
  })
  .catch((err) => {
    console.log('Failed to synch db:' + err.message)
  })
module.exports = Task

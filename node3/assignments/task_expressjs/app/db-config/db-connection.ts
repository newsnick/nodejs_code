import { Sequelize, DataTypes } from 'sequelize'

// Database connection
const sequelize = new Sequelize('test', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

export { sequelize, DataTypes }

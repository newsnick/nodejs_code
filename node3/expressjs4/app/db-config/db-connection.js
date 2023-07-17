const { Sequelize, DataTypes } = require('sequelize')

//Database connection

const sequelize = new Sequelize('college', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

module.exports = {
  sequelize,
  DataTypes,
}

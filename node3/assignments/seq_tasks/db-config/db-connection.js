const { Sequelize, DataTypes } = require('sequelize')
const dbObj = require('./db-properties')

const sequelize = new Sequelize(dbObj.database, dbObj.user, dbObj.password, {
  host: dbObj.host,
  port: dbObj.port,
  dialect: 'mysql',
})

module.exports = {
  sequelize,
  DataTypes,
}

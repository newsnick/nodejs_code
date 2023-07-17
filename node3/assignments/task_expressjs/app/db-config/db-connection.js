'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.DataTypes = exports.sequelize = void 0
var sequelize = require('sequelize')
Object.defineProperty(exports, 'DataTypes', {
  enumerable: true,
  get: function () {
    return sequelize.DataTypes
  },
})
// Database connection
var sequelize = new sequelize.Sequelize('test', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  sync: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})
exports.sequelize = sequelize

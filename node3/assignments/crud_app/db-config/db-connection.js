// const mysql = require('mysql2/promise')
// const dbObj = require('./db-properties')

// module.exports = {
//   getConnection: function () {
//     return mysql.createConnection({
//       host: dbObj.host,
//       port: dbObj.port,
//       user: dbObj.user,
//       password: dbObj.password,
//       database: dbObj.database,
//       insecureAuth: true,
//     })
//   },
// }

const Sequelize = require('sequelize')
const dbObj = require('./db-properties')

const sequelize = new Sequelize(dbObj.database, dbObj.user, dbObj.password, {
  host: dbObj.host,
  port: dbObj.port,
  dialect: 'mysql',
})

module.exports = {
  sequelize,
}

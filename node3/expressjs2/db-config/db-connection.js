const mysql = require('../node_modules/mysql')
const dbObj = require('./db-properties')

module.exports = {
  getConnection: function () {
    return mysql.createConnection({
      host: dbObj.host,
      port: dbObj.port,
      user: dbObj.user,
      password: dbObj.password,
      database: dbObj.database,
    })
  },
}

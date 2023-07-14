// check db connection working fine or not and retrive data from database.
// npm install mysql
// const mysql = require('./node_modules/mysql')

// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   port: '3306',
//   user: 'root',
//   password: 'root',
//   database: 'college',
//   waitForConnections: true,
//   connectionLimit: 10,
// })
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'college',
  waitForConnections: true,
  connectionLimit: 10,
})

connection.connect((err) => {
  if (err) throw err
  console.log('Connected to MySQL database.')
})

connection.query('SELECT * FROM students', (err, resultSet) => {
  if (err) throw err
  console.log('Data fetched successfully:')
  console.log(resultSet)
})

connection.end()

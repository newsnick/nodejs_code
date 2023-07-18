// // Exposing different rest endpoints
// // To perform crud opertation on db data
// const express = require('./node_modules/express')
// const bodyParser = require('./node_modules/body-parser') //read post parameters
// var fetch = require('./fetch/fetch')
// var update = require('./update/update')
// var deleteRecord = require('./delete/delete')
// var insert = require('./insert/insert')
// const app = express()
// const PORT = 9090

// //set json MIME Type - (define reqest headers)
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// app.use('/fetch', fetch)

// app.use('/update', update)

// app.use('/insert', insert)

// app.use('/delete', deleteRecord)
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`)
// })

const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('./fetch/fetch')
const update = require('./update/update')
const deleteRecord = require('./delete/delete')
const insert = require('./insert/insert')
const { sequelize } = require('./db-config/db-connection')

const app = express()
const PORT = 9090

// Set json MIME Type - (define request headers)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Sync Sequelize models with the database
sequelize.sync()

app.use('/fetch', fetch)
app.use('/update', update)
app.use('/insert', insert)
app.use('/delete', deleteRecord)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
/*
fetch request- 
http://localhost:9090/fetch
*/
/*
update request - http://localhost:9090/update/9001
request body- 
{
  "name": "keyboard",
  "price": 200
}
*/

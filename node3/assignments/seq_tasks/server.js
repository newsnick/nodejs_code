const express = require('express')
const bodyParser = require('body-parser')
const taskRoutes = require('./routes/task.routes.js')
console.log(taskRoutes)
const { sequelize } = require('./db-config/db-connection.js')

const PORT = 8080

const app = express()
// Set json MIME Type - (define request headers)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Sync Sequelize models with the database
sequelize.sync()

app.use('/tasks', taskRoutes)

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

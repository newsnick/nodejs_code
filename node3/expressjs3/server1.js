// sequelize
//
const express = require('express')
const { sequelize, DataTypes } = require('./db-config/db-connection')

const app = express()
const PORT = 8080

// Graduates model definition
const Graduates = sequelize.define('graduates', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  mayor: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
  },
})

// Synchronize the model with the database
Graduates.sync()
  .then(() => {
    console.log('Synced db.')
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message)
  })

// Middleware to accept JSON data
app.use(express.json())

// Graduates insert route
app.post('/st', (req, res) => {
  const { id, name, age, major, year } = req.body

  Graduates.create({ id, name, age, major, year })
    .then(() => {
      res.send('Graduates inserted successfully.')
    })
    .catch((err) => {
      console.log('Error while inserting data:', err)
      res.status(500).send('Error while inserting data.')
    })
})

// Graduates find all route
app.get('/', (req, res) => {
  Graduates.findAll()
    .then((Graduates) => {
      res.send(Graduates)
    })
    .catch((err) => {
      console.log('Error while fetching data:', err)
      res.status(500).send('Error while fetching data.')
    })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

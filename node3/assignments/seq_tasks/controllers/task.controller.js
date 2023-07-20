const Task = require('../models/task.model.js')
const express = require('express')
const router = express.Router()

// Task insert operation
const createTask = async (req, res) => {
  const tasks = req.body
  try {
    Task.create(tasks).then(() => {
      res.send('Task inserted successfully.')
    })
  } catch (error) {
    console.log('Error while inserting data.', error)
    res.status(500).send('Error while inserting data.')
  }
}

// Task fetch all operation
const getAllTasks = async (req, res) => {
  try {
    Task.findAll().then((tasks) => {
      res.send(tasks)
    })
  } catch (error) {
    console.log('Error while fetching data.', error)
    res.status(500).send('Error while fetching data.')
  }
}

// Task update operation
const updateTask = async (req, res) => {
  const tId = req.params.id
  const tasks = req.body

  try {
    Task.update(tasks, { where: { id: tId } }).then(() => {
      res.send('Student data updated successfully.')
    })
  } catch (error) {
    console.log('Error while updating data.', error)
    res.status(500).send('Error while updating data.')
  }
}

// Task delete operation
const deleteTask = async (req, res) => {
  const tId = req.params.id

  try {
    Task.destroy({ where: { id: tId } }).then(() => {
      res.send('Task deleted successfully.')
    })
  } catch (error) {
    console.log('Error while deleting data.', error)
    res.status(500).send('Error while deleting data.')
  }
}

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
}

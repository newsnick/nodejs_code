const Task = require('../models/task.model')

// Task insert operation

const createTask = async (req, res) => {
  const { id, username, description, deadline, status } = req.body
  try {
    const task = await Student.create({
      id,
      username,
      description,
      deadline,
      status,
    })
    res.send('Task inserted successfully.')
  } catch (error) {
    console.log('Error while inserting data: ', error)
    res.status(500), send('Error while inserting data.')
  }
}

//Task fetch all operation
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll()
    res.send(tasks)
  } catch (error) {
    console.log('Error while fetching data.', error)
    res.status(500).send('Error while fetching data.')
  }
}

// Tasks update operation
const updateTask = async (req, res) => {
  const { id } = req.params
  const { username, description, deadline, status } = req.body

  try {
    const task = await Task.findOne({ where: { id } })
    if (!task) {
      return res.status(404).send('Task not found.')
    }
    task.username = username
    task.description = description
    task.deadline = deadline
    task.status = status

    await task.save()
    res.send('Task updated successfully.')
  } catch (error) {
    console.log('Error while updating task.')
  }
}

// Task delete operation

const deleteTask = async (req, res) => {
  const { id } = req.params
  try {
    const task = await Task.findOne({ where: { id } })
    if (!task) {
      return res.status(404).send('Task not found.')
    }
    await task.destroy()
    res.send('Task deleted successfully.')
  } catch (error) {
    console.log('Error while deleting task.')
  }
}

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
}

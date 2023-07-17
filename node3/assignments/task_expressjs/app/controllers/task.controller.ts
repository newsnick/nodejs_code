import { Request, Response } from 'express'
import { Task } from '../models/task.model'

// Task insert operation
export const createTask = async (req: Request, res: Response) => {
  const { id, username, description, deadline, status } = req.body
  try {
    const task = await Task.create({
      id,
      username,
      description,
      deadline,
      status,
    })
    res.send('Task inserted successfully.')
  } catch (error) {
    console.log('Error while inserting data: ', error)
    res.status(500).send('Error while inserting data.')
  }
}

// Task fetch all operation
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll()
    res.send(tasks)
  } catch (error) {
    console.log('Error while fetching data.', error)
    res.status(500).send('Error while fetching data.')
  }
}

// Task update operation
export const updateTask = async (req: Request, res: Response) => {
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
    console.log('Error while updating task.', error)
    res.status(500).send('Error while updating task.')
  }
}

// Task delete operation
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const task = await Task.findOne({ where: { id } })
    if (!task) {
      return res.status(404).send('Task not found.')
    }
    await task.destroy()
    res.send('Task deleted successfully.')
  } catch (error) {
    console.log('Error while deleting task.', error)
    res.status(500).send('Error while deleting task.')
  }
}

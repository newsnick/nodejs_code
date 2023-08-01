// tasks.model.ts
import { DataTypes, Model, Sequelize } from 'sequelize'
import { sequelize } from '../db-config/db-connection.js'

class Task extends Model {
  public id!: number
  public username!: string
  public description!: string
  public deadline!: Date
  public status!: boolean
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: false,
  }
)

export default Task

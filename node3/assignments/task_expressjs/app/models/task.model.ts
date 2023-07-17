import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../db-config/db-connection'

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
      primaryKey: true,
      autoIncrement: true,
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
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks', // Assuming your table name is 'tasks'
    timestamps: false, // If your table doesn't have 'created_at' and 'updated_at' columns
  }
)

export { Task }

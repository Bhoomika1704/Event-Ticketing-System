import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Event extends Model {
  public name!: string;
  public totalTickets!: number;
  public availableTickets!: number;
}

Event.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalTickets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availableTickets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
  }
);


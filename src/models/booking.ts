import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Booking extends Model {
  public userId!: number;
  public eventId!: number;
}

Booking.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings',
  }
);


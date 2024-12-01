import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'event_ticketing',
});


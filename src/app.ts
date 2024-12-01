import express from 'express';
import bodyParser from 'body-parser';
import eventRoutes from './routes/eventRoutes';
import bookingRoutes from './routes/bookingRoutes';

const app = express();

app.use(bodyParser.json());
app.use(eventRoutes);
app.use(bookingRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


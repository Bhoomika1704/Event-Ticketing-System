import express from 'express';
import { BookingController } from '../controllers/bookingController';

const router = express.Router();

router.post('/bookings', BookingController.createBooking);

export default router;


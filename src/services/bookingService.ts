import { Booking } from '../models/booking';
import { Event } from '../models/event';

export class BookingService {
  static async createBooking(userId: number, eventId: number) {
    // Decrement available tickets for the event
    const event = await Event.findByPk(eventId);
    if (event && event.availableTickets > 0) {
      event.availableTickets -= 1;
      await event.save();
      // Create a booking record
      return await Booking.create({ userId, eventId });
    }
    throw new Error('No available tickets');
  }
}


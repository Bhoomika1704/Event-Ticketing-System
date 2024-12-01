import { Request, Response } from 'express';
import { BookingService } from '../services/bookingService';
import { EventService } from '../services/eventService';

export class BookingController {
  static async createBooking(req: Request, res: Response) {
    const { userId, eventId } = req.body;
    try {
      const event = await EventService.getEventById(eventId);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      if (event.availableTickets <= 0) {
        return res.status(400).json({ message: 'No available tickets for this event' });
      }
      const booking = await BookingService.createBooking(userId, eventId);
      return res.status(201).json({ message: 'Booking successful', booking });
    } catch (error) {
      return res.status(500).json({ message: 'Error booking ticket', error });
    }
  }
}


import { Request, Response } from 'express';
import { EventService } from '../services/eventService';

export class EventController {
  static async createEvent(req: Request, res: Response) {
    const { name, totalTickets } = req.body;
    try {
      const event = await EventService.createEvent(name, totalTickets);
      return res.status(201).json({ message: 'Event created', event });
    } catch (error) {
      return res.status(500).json({ message: 'Error creating event', error });
    }
  }

  static async getEventById(req: Request, res: Response) {
    const { eventId } = req.params;
    try {
      const event = await EventService.getEventById(eventId);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      return res.status(200).json(event);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching event details', error });
    }
  }

  static async listAllEvents(req: Request, res: Response) {
    try {
      const events = await EventService.listAllEvents();
      return res.status(200).json(events);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching events', error });
    }
  }
}


import { Event } from '../models/event';

export class EventService {
  static async createEvent(name: string, totalTickets: number) {
    return await Event.create({
      name,
      totalTickets,
      availableTickets: totalTickets,
    });
  }

  static async getEventById(eventId: string) {
    return await Event.findByPk(eventId);
  }

  static async listAllEvents() {
    return await Event.findAll();
  }
}


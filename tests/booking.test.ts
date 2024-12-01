import request from 'supertest';
import { app } from '../src/app';

describe('Booking tests', () => {
  it('should create a booking', async () => {
    const response = await request(app)
      .post('/bookings')
      .send({ userId: 1, eventId: 1 });
    expect(response.status).toBe(201);
  });
});


import request from 'supertest';
import { app } from '../src/app';

describe('Event tests', () => {
  it('should create an event', async () => {
    const response = await request(app)
      .post('/events')
      .send({ name: 'Test Event', totalTickets: 100 });
    expect(response.status).toBe(201);
  });
});


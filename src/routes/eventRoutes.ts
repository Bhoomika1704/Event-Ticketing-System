import express from 'express';
import { EventController } from '../controllers/eventController';

const router = express.Router();

router.post('/events', EventController.createEvent);
router.get('/events/:eventId', EventController.getEventById);
router.get('/events', EventController.listAllEvents);

export default router;


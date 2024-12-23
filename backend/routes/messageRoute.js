import { Router } from 'express';
import {  getMessages, sendMessage } from '../controllers/messagecontroller.js';
import { protectedRoute } from '../middleware.js/protectedRoute.js';

const router = Router();

// Route to send a new message
router.post('/send/:id',protectedRoute, sendMessage);

router.get('/get/:id',protectedRoute, getMessages);
// Route to send a new message


export default router;
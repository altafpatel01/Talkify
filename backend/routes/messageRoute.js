import { Router } from 'express';
import {  sendMessage } from '../controllers/messageController.js';
import { protectedRoute } from '../middleware.js/protectedRoute.js';

const router = Router();

// Route to send a new message
router.post('/send/:id',protectedRoute, sendMessage);

// Route to send a new message


export default router;
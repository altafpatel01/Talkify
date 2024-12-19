import express from 'express'
import { signup } from '../controllers/authcontroller.js';

const route = express.Router()

route.post('/signup', signup )

export default route;
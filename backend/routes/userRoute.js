import express from "express";
import getUsers  from "../controllers/usercontroller.js";
import { protectedRoute } from "../middleware.js/protectedRoute.js";
const router = express.Router();


router.get('/',protectedRoute, getUsers);

export default router;
import express from 'express';
import { validateStudentName } from '../middleware/validators.js';
import { getStudentData } from '../controllers/weatherController.js';
const router = express.Router();

router.get('/:city', validateStudentName, getStudentData);
export default router;

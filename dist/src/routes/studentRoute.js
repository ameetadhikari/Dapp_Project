import express from 'express';
import { validateStudentName } from '../middleware/validators.js';
import { getStudentData } from '../controllers/studentController.js';
const router = express.Router();
router.get('/:student', validateStudentName, getStudentData);
export default router;
//# sourceMappingURL=studentRoute.js.map
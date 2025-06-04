import express from 'express';
import { addSchool, listSchools } from '../controllers/schoolcontroller.js';

const router = express.Router();

// Route to add a new school
router.post('/addSchool', addSchool);

// Route to list all schools sorted by distance
router.get('/listSchool', listSchools);

export default router;
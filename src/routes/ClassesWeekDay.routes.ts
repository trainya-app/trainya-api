import { Router } from 'express';
import ClassesWeekDaysController from '../app/controllers/classes/ClassesWeekDaysController';
const classesWeekDaysRoutes = Router();

classesWeekDaysRoutes.get('/classWeekDays', ClassesWeekDaysController.index);

export default classesWeekDaysRoutes;

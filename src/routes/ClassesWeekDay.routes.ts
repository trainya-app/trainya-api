import { Router } from 'express';
import ClassesWeekDaysController from '../app/controllers/classes/ClassesWeekDaysController';
const classesWeekDaysRoutes = Router();

classesWeekDaysRoutes.get('/classWeekDays', ClassesWeekDaysController.index);
classesWeekDaysRoutes.post('/classWeekDays', ClassesWeekDaysController.store);

export default classesWeekDaysRoutes;

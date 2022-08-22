import { Router } from 'express';
import ClassesWeekDaysController from '../app/controllers/classes/ClassesWeekDaysController';
const classesWeekDaysRoutes = Router();

classesWeekDaysRoutes.get('/classWeekDays', ClassesWeekDaysController.index);
classesWeekDaysRoutes.post('/classWeekDays', ClassesWeekDaysController.store);
classesWeekDaysRoutes.delete(
  '/classWeekDays/:id',
  ClassesWeekDaysController.delete
);
classesWeekDaysRoutes.get('/classWeekDays/:id', ClassesWeekDaysController.show);

export default classesWeekDaysRoutes;

import { Router } from 'express';
import WeekDaysController from '../app/controllers/week-days/WeekDaysController';
const weekDaysRoutes = Router();

weekDaysRoutes.get('/weekDays', WeekDaysController.index);
weekDaysRoutes.post('/weekDays', WeekDaysController.store);
weekDaysRoutes.delete('/weekDays/:id', WeekDaysController.delete);
weekDaysRoutes.get('/weekDays/:id', WeekDaysController.show);

export default weekDaysRoutes;

import { Router } from 'express';
import WeekDaysController from '../app/controllers/week-days/WeekDaysController';
const weekDaysRoutes = Router();

weekDaysRoutes.get('/weekDays', WeekDaysController.index);

export default weekDaysRoutes;

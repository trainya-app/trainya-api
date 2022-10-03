import { Router } from 'express';
import MonthsController from '../app/controllers/months/MonthsController';
const monthsRoutes = Router();

monthsRoutes.get('/months', MonthsController.index);
monthsRoutes.post('/months', MonthsController.store);

export default monthsRoutes;

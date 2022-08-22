import { Router } from 'express';
import StatisticsController from '../app/controllers/statistics/StatisticsController';
const statisticsRoutes = Router();

statisticsRoutes.get('/statistics', StatisticsController.index);
statisticsRoutes.post('/statistics', StatisticsController.store);
statisticsRoutes.delete('/statistics/:id', StatisticsController.delete);

export default statisticsRoutes;

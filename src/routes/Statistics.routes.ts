import { Router } from 'express';
import StatisticsController from '../app/controllers/statistics/StatisticsController';
const statisticsRoutes = Router();

statisticsRoutes.get('/statistics', StatisticsController.index);

export default statisticsRoutes;

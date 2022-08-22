import { Router } from 'express';
import MembersStatisticsController from '../app/controllers/members/MembersStatisticsController';
const memberStatisticsRoutes = Router();

memberStatisticsRoutes.get(
  '/memberStatistics',
  MembersStatisticsController.index
);
memberStatisticsRoutes.post(
  '/memberStatistics',
  MembersStatisticsController.store
);

export default memberStatisticsRoutes;
